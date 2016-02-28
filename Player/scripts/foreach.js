define(['require', 'scriptrunner', 'scriptparser', 'expressions'], function (require, scriptrunner, scriptParser, expressions) {
    return {
        create: function (line) {
            var scripts = require('scripts');
            var parameterAndScript = scriptParser.getParameterInternal(line, '(', ')');
            var loopScript = scripts.parseScript(parameterAndScript.after);
            var parameters = scriptParser.splitParameters(parameterAndScript.parameter);
            
            if (parameters.length !== 2) {
                throw '"foreach" script should have 2 parameters: ' + line;
            }

            return {
                variable: parameters[0],
                list: expressions.parseExpression(parameters[1]),
                loopScript: loopScript
            };
        },
        execute: function (ctx) {
            // TODO: Pre Quest 5.3 allows foreach over a string to get each character
            // TODO: "return" breaks loop
            scriptrunner.evaluateExpression(ctx.parameters.list, function (listResult) {
                if (listResult.length == 0) {
                    ctx.complete;
                    return;
                }
                
                ctx.locals[ctx.parameters.variable] = listResult[0];
                var index = 0;
                
                var runLoop = function () {
                    if (index < listResult.length) {
                        var script = [].concat(ctx.parameters.loopScript);
                        script.push({
                            command: {
                                execute: function () {
                                    ctx.locals[ctx.parameters.variable] = listResult[index];
                                    index++;
                                    if (index % 1000 != 0) {
                                        runLoop();
                                    }
                                    else {
                                        setTimeout(function () {
                                            runLoop();
                                        }, 0);
                                    }
                                }
                            }
                        });
                        scriptrunner.getCallstack().push({
                            script: script,
                            index: 0,
                        });
                    }
                    ctx.complete();
                };
                
                runLoop();
            });
        }
    };
});