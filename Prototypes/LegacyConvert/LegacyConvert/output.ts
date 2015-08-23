enum State {Ready, Working, Waiting, Finished};
class DefineBlock {
		StartLine: number;
		EndLine: number;
}
class Context {
		CallingObjectId: number;
		NumParameters: number;
		Parameters: string[];
		FunctionReturnValue: string;
		AllowRealNamesInCommand: boolean;
		DontProcessCommand: boolean;
		CancelExec: boolean;
		StackCounter: number;
}
enum LogType {Misc, FatalError, WarningError, Init, LibraryWarningError, Warning, UserError, InternalError};
enum Direction {None = -1, Out = 0, North = 1, South = 2, East = 3, West = 4, NorthWest = 5, NorthEast = 6, SouthWest = 7, SouthEast = 8, Up = 9, Down = 10};
class ItemType {
		Name: string;
		Got: boolean;
}
class Collectable {
		Name: string;
		Type: string;
		Value: number;
		Display: string;
		DisplayWhenZero: boolean;
}
class PropertyType {
		PropertyName: string;
		PropertyValue: string;
}
class ActionType {
		ActionName: string;
		Script: string;
}
class UseDataType {
		UseObject: string;
		UseType: UseType;
		UseScript: string;
}
class GiveDataType {
		GiveObject: string;
		GiveType: GiveType;
		GiveScript: string;
}
class PropertiesActions {
		Properties: string;
		NumberActions: number;
		Actions: ActionType[];
		NumberTypesIncluded: number;
		TypesIncluded: string[];
}
class VariableType {
		VariableName: string;
		VariableContents: string[];
		VariableUBound: number;
		DisplayString: string;
		OnChangeScript: string;
		NoZeroDisplay: boolean;
}
class SynonymType {
		OriginalWord: string;
		ConvertTo: string;
}
class TimerType {
		TimerName: string;
		TimerInterval: number;
		TimerActive: boolean;
		TimerAction: string;
		TimerTicks: number;
		BypassThisTurn: boolean;
}
class UserDefinedCommandType {
		CommandText: string;
		CommandScript: string;
}
class TextAction {
		Data: string;
		Type: TextActionType;
}
enum TextActionType {Text, Script, Nothing, Default};
class ScriptText {
		Text: string;
		Script: string;
}
class PlaceType {
		PlaceName: string;
		Prefix: string;
		PlaceAlias: string;
		Script: string;
}
class RoomType {
		RoomName: string;
		RoomAlias: string;
		Commands: UserDefinedCommandType[];
		NumberCommands: number;
		Description: TextAction = new TextAction();
		Out: ScriptText = new ScriptText();
		East: TextAction = new TextAction();
		West: TextAction = new TextAction();
		North: TextAction = new TextAction();
		South: TextAction = new TextAction();
		NorthEast: TextAction = new TextAction();
		NorthWest: TextAction = new TextAction();
		SouthEast: TextAction = new TextAction();
		SouthWest: TextAction = new TextAction();
		Up: TextAction = new TextAction();
		Down: TextAction = new TextAction();
		InDescription: string;
		Look: string;
		Places: PlaceType[];
		NumberPlaces: number;
		Prefix: string;
		Script: string;
		Use: ScriptText[];
		NumberUse: number;
		ObjId: number;
		BeforeTurnScript: string;
		AfterTurnScript: string;
		Exits: RoomExits;
}
class ObjectType {
		ObjectName: string;
		ObjectAlias: string;
		Detail: string;
		ContainerRoom: string;
		Exists: boolean;
		IsGlobal: boolean;
		Prefix: string;
		Suffix: string;
		Gender: string;
		Article: string;
		DefinitionSectionStart: number;
		DefinitionSectionEnd: number;
		Visible: boolean;
		GainScript: string;
		LoseScript: string;
		NumberProperties: number;
		Properties: PropertyType[];
		Speak: TextAction = new TextAction();
		Take: TextAction = new TextAction();
		IsRoom: boolean;
		IsExit: boolean;
		CorresRoom: string;
		CorresRoomId: number;
		Loaded: boolean;
		NumberActions: number;
		Actions: ActionType[];
		NumberUseData: number;
		UseData: UseDataType[];
		UseAnything: string;
		UseOnAnything: string;
		Use: string;
		NumberGiveData: number;
		GiveData: GiveDataType[];
		GiveAnything: string;
		GiveToAnything: string;
		DisplayType: string;
		NumberTypesIncluded: number;
		TypesIncluded: string[];
		NumberAltNames: number;
		AltNames: string[];
		AddScript: TextAction = new TextAction();
		RemoveScript: TextAction = new TextAction();
		OpenScript: TextAction = new TextAction();
		CloseScript: TextAction = new TextAction();
}
class ChangeType {
		AppliesTo: string;
		Change: string;
}
class GameChangeDataType {
		NumberChanges: number;
		ChangeData: ChangeType[];
}
class ResourceType {
		ResourceName: string;
		ResourceStart: number;
		ResourceLength: number;
		Extracted: boolean;
}
class ExpressionResult {
		Result: string;
		Success: ExpressionSuccess;
		Message: string;
}
enum PlayerError {BadCommand, BadGo, BadGive, BadCharacter, NoItem, ItemUnwanted, BadLook, BadThing, DefaultLook, DefaultSpeak, BadItem, DefaultTake, BadUse, DefaultUse, DefaultOut, BadPlace, BadExamine, DefaultExamine, BadTake, CantDrop, DefaultDrop, BadDrop, BadPronoun, AlreadyOpen, AlreadyClosed, CantOpen, CantClose, DefaultOpen, DefaultClose, BadPut, CantPut, DefaultPut, CantRemove, AlreadyPut, DefaultRemove, Locked, DefaultWait, AlreadyTaken};
enum ItType {Inanimate, Male, Female};
enum SetResult {Error, Found, Unfound};
enum Thing {Character, Object, Room};
enum ConvertType {Strings, Functions, Numeric, Collectables};
enum UseType {UseOnSomething, UseSomethingOn};
enum GiveType {GiveToSomething, GiveSomethingTo};
enum VarType {String, Numeric};
enum StopType {Win, Lose, Null};
enum ExpressionSuccess {OK, Fail};
class InitGameData {
		Data: Byte[];
		SourceFile: string;
}
class ArrayResult {
		Name: string;
		Index: number;
}
class PlayerCanAccessObjectResult {
		CanAccessObject: boolean;
		ErrorMsg: string;
}
class LegacyGame {
	CopyContext(ctx: Context): Context {
		var result: Context = new Context();
		result.CallingObjectId = ctx.CallingObjectId;
		result.NumParameters = ctx.NumParameters;
		result.Parameters = ctx.Parameters;
		result.FunctionReturnValue = ctx.FunctionReturnValue;
		result.AllowRealNamesInCommand = ctx.AllowRealNamesInCommand;
		result.DontProcessCommand = ctx.DontProcessCommand;
		result.CancelExec = ctx.CancelExec;
		result.StackCounter = ctx.StackCounter;
		return result;
	}
	_defineBlockParams: any;
	_openErrorReport: string;
	_casKeywords: string[] = [];
	_lines: string[];
	_defineBlocks: DefineBlock[];
	_numberSections: number;
	_gameName: string;
	_nullContext: Context = new Context();
	_changeLogRooms: ChangeLog;
	_changeLogObjects: ChangeLog;
	_defaultProperties: PropertiesActions;
	_defaultRoomProperties: PropertiesActions;
	_rooms: RoomType[];
	_numberRooms: number;
	_numericVariable: VariableType[];
	_numberNumericVariables: number;
	_stringVariable: VariableType[];
	_numberStringVariables: number;
	_synonyms: SynonymType[];
	_numberSynonyms: number;
	_items: ItemType[];
	_chars: ObjectType[];
	_objs: ObjectType[];
	_numberChars: number;
	_numberObjs: number;
	_numberItems: number;
	_currentRoom: string;
	_collectables: Collectable[];
	_numCollectables: number;
	_gamePath: string;
	_gameFileName: string;
	_saveGameFile: string;
	_defaultFontName: string;
	_defaultFontSize: number;
	_autoIntro: boolean;
	_commandOverrideModeOn: boolean;
	_commandOverrideVariable: string;
	_afterTurnScript: string;
	_beforeTurnScript: string;
	_outPutOn: boolean;
	_gameAslVersion: number;
	_choiceNumber: number;
	_gameLoadMethod: string;
	_timers: TimerType[];
	_numberTimers: number;
	_numDisplayStrings: number;
	_numDisplayNumerics: number;
	_gameFullyLoaded: boolean;
	_gameChangeData: GameChangeDataType = new GameChangeDataType();
	_lastIt: number;
	_lastItMode: ItType;
	_thisTurnIt: number;
	_thisTurnItMode: ItType;
	_badCmdBefore: string;
	_badCmdAfter: string;
	_numResources: number;
	_resources: ResourceType[];
	_resourceFile: string;
	_resourceOffset: number;
	_startCatPos: number;
	_useAbbreviations: boolean;
	_loadedFromQsg: boolean;
	_beforeSaveScript: string;
	_onLoadScript: string;
	_numSkipCheckFiles: number;
	_skipCheckFile: string[];
	_compassExits: any = {};
	_gotoExits: any = {};
	_textFormatter: TextFormatter = new TextFormatter();
	_log: any = {};
	_casFileData: string;
	_commandLock: Object = new Object();
	_stateLock: Object = new Object();
	_state: State = State.Ready;
	_waitLock: Object = new Object();
	_readyForCommand: boolean = true;
	_gameLoading: boolean;
	_random: Random = new Random();
	_tempFolder: string;
	_playerErrorMessageString: string;
	_listVerbs: any = {};
	_filename: string;
	_originalFilename: string;
	_data: InitGameData;
	_player: IPlayer;
	_gameFinished: boolean;
	_gameIsRestoring: boolean;
	_useStaticFrameForPictures: boolean;
	_fileData: string;
	_fileDataPos: number;
	_questionResponse: boolean;
	// UNKNOWN ConstructorBlock
	// UNKNOWN ConstructorBlock
	RemoveFormatting(s: string): string {
		var code: string;
		var pos: number;
		var len: number;
		// UNKNOWN DoLoopUntilBlock
		return s;
	}
	CheckSections(): boolean {
		var defines: number;
		var braces: number;
		var checkLine: string = "";
		var bracePos: number;
		var pos: number;
		var section: string = "";
		var hasErrors: boolean;
		var skipBlock: boolean;
		this._openErrorReport = "";
		hasErrors = false;
		defines = 0;
		braces = 0;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		return !hasErrors;
	}
	ConvertFriendlyIfs(): boolean {
		var convPos: number;
		var symbPos: number;
		var symbol: string;
		var endParamPos: number;
		var paramData: string;
		var startParamPos: number;
		var firstData: string;
		var secondData: string;
		var obscureLine: string;
		var newParam: string;
		var varObscureLine: string;
		var bracketCount: number;
		// UNKNOWN ForBlock
		return false;
	}
	ConvertMultiLineSections(): void {
		var startLine: number;
		var braceCount: number;
		var thisLine: string;
		var lineToAdd: string;
		var lastBrace: number;
		var i: number;
		var restOfLine: string;
		var procName: string;
		var endLineNum: number;
		var afterLastBrace: string;
		var z: string;
		var startOfOrig: string;
		var testLine: string;
		var testBraceCount: number;
		var obp: number;
		var cbp: number;
		var curProc: number;
		i = 1;
		// UNKNOWN DoLoopUntilBlock
		// UNKNOWN ForBlock
	}
	ErrorCheck(): boolean {
		var curBegin: number;
		var curEnd: number;
		var hasErrors: boolean;
		var curPos: number;
		var numParamStart: number;
		var numParamEnd: number;
		var finLoop: boolean;
		var inText: boolean;
		hasErrors = false;
		inText = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		return hasErrors;
	}
	GetAfterParameter(s: string): string {
		var eop: number;
		eop = 'expr';
		// UNKNOWN MultiLineIfBlock
	}
	ObliterateParameters(s: string): string {
		var inParameter: boolean;
		var exitCharacter: string = "";
		var curChar: string;
		var outputLine: string = "";
		var obscuringFunctionName: boolean;
		inParameter = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
	}
	ObliterateVariableNames(s: string): string {
		var inParameter: boolean;
		var exitCharacter: string = "";
		var outputLine: string = "";
		var curChar: string;
		inParameter = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		return outputLine;
	}
	RemoveComments(): void {
		var aposPos: number;
		var inTextBlock: boolean;
		var inSynonymsBlock: boolean;
		var oblitLine: string;
		// UNKNOWN ForBlock
	}
	ReportErrorLine(s: string): string {
		var replaceFrom: number;
		replaceFrom = 'expr';
		// UNKNOWN MultiLineIfBlock
	}
	YesNo(yn: boolean): string {
		// UNKNOWN SingleLineIfStatement
	}
	IsYes(yn: string): boolean {
		// UNKNOWN SingleLineIfStatement
	}
	BeginsWith(s: string, text: string): boolean {
		return 'expr' == 'expr';
	}
	ConvertCasKeyword(casChar: string): string {
		var c: Byte = 'expr';
		var keyword: string = this._casKeywords[c];
		// UNKNOWN MultiLineIfBlock
		return keyword;
	}
	ConvertMultiLines(): void {
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
	}
	GetDefineBlock(blockname: string): DefineBlock {
		var l: string;
		var blockType: string;
		var result = new DefineBlock();
		result.StartLine = 0;
		result.EndLine = 0;
		// UNKNOWN ForBlock
		return result;
	}
	DefineBlockParam(blockname: string, param: string): DefineBlock {
		var cache: any;
		var result = new DefineBlock();
		param = "k" + param;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		return result;
	}
	GetEverythingAfter(s: string, text: string): string {
		// UNKNOWN MultiLineIfBlock
		return 'expr';
	}
	Keyword2CAS(KWord: string): string {
		var k = "";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		return 'expr' + KWord + 'expr';
	}
	LoadCASKeywords(): void {
		var questDatLines: string[] = 'expr';
		// UNKNOWN ForEachBlock
	}
	GetResourceLines(res: Byte[]): string[] {
		var enc: any = {};
		var resFile: string = 'expr';
		return 'expr';
	}
	ParseFile(filename: string): boolean {
		var hasErrors: boolean;
		var result: boolean;
		var libCode: string[] = [];
		var libLines: number;
		var ignoreMode: boolean;
		var skipCheck: boolean;
		var c: number;
		var d: number;
		var l: number;
		var libFileHandle: number;
		var libResourceLines: string[];
		var libFile: string;
		var libLine: string;
		var inDefGameBlock: number;
		var gameLine: number;
		var inDefSynBlock: number;
		var synLine: number;
		var libFoundThisSweep: boolean;
		var libFileName: string;
		var libraryList: string[] = [];
		var numLibraries: number;
		var libraryAlreadyIncluded: boolean;
		var inDefTypeBlock: number;
		var typeBlockName: string;
		var typeLine: number;
		var defineCount: number;
		var curLine: number;
		this._defineBlockParams = new any();
		result = true;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		numLibraries = 0;
		// UNKNOWN DoLoopUntilBlock
		skipCheck = false;
		var lastSlashPos: number;
		var slashPos: number;
		var curPos = 1;
		// UNKNOWN DoLoopUntilBlock
		var filenameNoPath = 'expr';
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		this._numberSections = 1;
		// UNKNOWN ForBlock
		this._numberSections = this._numberSections - 1;
		var gotGameBlock = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		hasErrors = 'expr';
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		this._saveGameFile = "";
		return result;
	}
	LogASLError(err: string, type: LogType): void {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	GetParameter(s: string, ctx: Context, convertStringVariables: boolean): string {
		var newParam: string;
		var startPos: number;
		var endPos: number;
		startPos = 'expr';
		endPos = 'expr';
		// UNKNOWN MultiLineIfBlock
		var retrParam = 'expr';
		// UNKNOWN MultiLineIfBlock
		return 'expr';
	}
	AddLine(line: string): void {
		var numLines: number;
		numLines = 'expr' + 1;
		// UNKNOWN ReDimPreserveStatement
		this._lines[numLines] = line;
	}
	LoadCASFile(filename: string): void {
		var endLineReached: boolean;
		var exitTheLoop: boolean;
		var textMode: boolean;
		var casVersion: number;
		var startCat: string = "";
		var endCatPos: number;
		var fileData: string = "";
		var chkVer: string;
		var j: number;
		var curLin: string;
		var textData: string;
		var cpos: number;
		var nextLinePos: number;
		var c: string;
		var tl: string;
		var ckw: string;
		var d: string;
		// UNKNOWN ReDimStatement
		// UNKNOWN MultiLineIfBlock
		chkVer = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
	}
	DecryptString(s: string): string {
		var output = "";
		// UNKNOWN ForBlock
		return output;
	}
	RemoveTabs(s: string): string {
		// UNKNOWN MultiLineIfBlock
		return s;
	}
	DoAddRemove(childId: number, parentId: number, add: boolean, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	DoLook(id: number, ctx: Context, showExamineError: boolean, showDefaultDescription: boolean): void {
		var objectContents: string;
		var foundLook = false;
		// UNKNOWN MultiLineIfBlock
		var lookLine: string;
		var o = this._objs[id];
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN SingleLineIfStatement
	}
	DoOpenClose(id: number, open: boolean, showLook: boolean, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	EvaluateInlineExpressions(s: string): string {
		// UNKNOWN MultiLineIfBlock
		var bracePos: number;
		var curPos = 1;
		var resultLine = "";
		// UNKNOWN DoLoopUntilBlock
		curPos = 1;
		// UNKNOWN DoLoopUntilBlock
		return resultLine;
	}
	ExecAddRemove(cmd: string, ctx: Context): void {
		var childId: number;
		var childName: string;
		var doAdd: boolean;
		var sepPos: number;
		var parentId: number;
		var sepLen: number;
		var parentName: string;
		var verb: string = "";
		var action: string;
		var foundAction: boolean;
		var actionScript: string = "";
		var propertyExists: boolean;
		var textToPrint: string;
		var isContainer: boolean;
		var gotObject: boolean;
		var childLength: number;
		var noParentSpecified = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		childLength = sepPos - 'expr';
		// UNKNOWN MultiLineIfBlock
		childName = 'expr';
		gotObject = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		isContainer = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var canAccessObject = 'expr';
		// UNKNOWN MultiLineIfBlock
		var canAccessParent = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var o = this._objs[parentId];
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecAddRemoveScript(parameter: string, add: boolean, ctx: Context): void {
		var childId: number;
		var parentId: number;
		var commandName: string;
		var childName: string;
		var parentName: string = "";
		var scp: number;
		// UNKNOWN MultiLineIfBlock
		scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		childId = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecOpenClose(cmd: string, ctx: Context): void {
		var id: number;
		var name: string;
		var doOpen: boolean;
		var isOpen: boolean;
		var foundAction: boolean;
		var action: string = "";
		var actionScript: string = "";
		var propertyExists: boolean;
		var textToPrint: string;
		var isContainer: boolean;
		// UNKNOWN MultiLineIfBlock
		name = 'expr';
		id = 'expr';
		// UNKNOWN MultiLineIfBlock
		isContainer = 'expr';
		// UNKNOWN MultiLineIfBlock
		isOpen = 'expr';
		// UNKNOWN MultiLineIfBlock
		var canAccessObject = 'expr';
		// UNKNOWN MultiLineIfBlock
		var o = this._objs[id];
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecuteSelectCase(script: string, ctx: Context): void {
		var afterLine = 'expr';
		// UNKNOWN MultiLineIfBlock
		var blockName = 'expr';
		var block = 'expr';
		var checkValue = 'expr';
		var caseMatch = false;
		// UNKNOWN ForBlock
	}
	ExecVerb(cmd: string, ctx: Context, libCommands: boolean): boolean {
		var gameBlock: DefineBlock;
		var foundVerb = false;
		var verbProperty: string = "";
		var script: string = "";
		var verbsList: string;
		var thisVerb: string = "";
		var scp: number;
		var id: number;
		var verbObject: string = "";
		var verbTag: string;
		var thisScript: string = "";
		// UNKNOWN MultiLineIfBlock
		gameBlock = 'expr';
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		return foundVerb;
	}
	ExpressionHandler(expr: string): ExpressionResult {
		var openBracketPos: number;
		var endBracketPos: number;
		var res: ExpressionResult = new ExpressionResult();
		// UNKNOWN DoLoopUntilBlock
		var numElements = 1;
		var elements: string[];
		// UNKNOWN ReDimStatement
		var numOperators = 0;
		var operators: string[] = [];
		var newElement: boolean;
		var obscuredExpr = 'expr';
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
		var opNum = 0;
		// UNKNOWN DoLoopUntilBlock
		res.Success = ExpressionSuccess.OK;
		res.Result = elements[1];
		return res;
	}
	ListContents(id: number, ctx: Context): string {
		var contentsIDs: number[] = [];
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var numContents = 0;
		// UNKNOWN ForBlock
		var contents = "";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ObscureNumericExps(s: string): string {
		var EPos: number;
		var CurPos: number;
		var OutputString: string;
		OutputString = s;
		CurPos = 1;
		// UNKNOWN DoLoopUntilBlock
		return OutputString;
	}
	ProcessListInfo(line: string, id: number): void {
		var listInfo: TextAction = new TextAction();
		var propName: string = "";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	GetHTMLColour(colour: string, defaultColour: string): string {
		colour = 'expr';
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN SelectBlock
	}
	DoPrint(text: string): void {
		// UNKNOWN RaiseEventStatement
	}
	DestroyExit(exitData: string, ctx: Context): void {
		var fromRoom: string = "";
		var toRoom: string = "";
		var roomId: number;
		var exitId: number;
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var roomExit: RoomExit;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	DoClear(): void {
		// UNKNOWN ExpressionStatement
	}
	DoWait(): void {
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN SyncLockBlock
	}
	ExecuteFlag(line: string, ctx: Context): void {
		var propertyString: string = "";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	ExecuteIfFlag(flag: string): boolean {
		return 'expr' == "yes";
	}
	ExecuteIncDec(line: string, ctx: Context): void {
		var variable: string;
		var change: number;
		var param = 'expr';
		var sc = 'expr';
		// UNKNOWN MultiLineIfBlock
		var value = 'expr';
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		var arrayIndex = 'expr';
		// UNKNOWN ExpressionStatement
	}
	ExtractFile(file: string): string {
		var length: number;
		var startPos: number;
		var extracted: boolean;
		var resId: number;
		// UNKNOWN SingleLineIfStatement
		var found = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var fileName = 'expr';
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		return fileName;
	}
	AddObjectAction(id: number, name: string, script: string, noUpdate: boolean): void {
		var actionNum: number;
		var foundExisting = false;
		var o = this._objs[id];
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		'expr'.ActionName = name;
		'expr'.Script = script;
		// UNKNOWN ExpressionStatement
	}
	AddToChangeLog(appliesTo: string, changeData: string): void {
		this._gameChangeData.NumberChanges = this._gameChangeData.NumberChanges + 1;
		// UNKNOWN ReDimPreserveStatement
		'expr' = new ChangeType();
		'expr'.AppliesTo = appliesTo;
		'expr'.Change = changeData;
	}
	AddToObjectChangeLog(appliesToType: any, appliesTo: string, element: string, changeData: string): void {
		var changeLog: ChangeLog;
		// UNKNOWN SelectBlock
		// UNKNOWN ExpressionStatement
	}
	AddToGiveInfo(id: number, giveData: string): void {
		var giveType: GiveType;
		var actionName: string;
		var actionScript: string;
		var o = this._objs[id];
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	AddToObjectActions(actionInfo: string, id: number, ctx: Context): void {
		var actionNum: number;
		var foundExisting = false;
		var name = 'expr';
		var ep = 'expr';
		// UNKNOWN MultiLineIfBlock
		var script = 'expr';
		var o = this._objs[id];
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		'expr'.ActionName = name;
		'expr'.Script = script;
		// UNKNOWN ExpressionStatement
	}
	AddToObjectAltNames(altNames: string, id: number): void {
		var o = this._objs[id];
		// UNKNOWN DoLoopUntilBlock
	}
	AddToObjectProperties(propertyInfo: string, id: number, ctx: Context): void {
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN DoLoopUntilBlock
	}
	AddToUseInfo(id: number, useData: string): void {
		var useType: UseType;
		var o = this._objs[id];
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	CapFirst(s: string): string {
		return 'expr' + 'expr';
	}
	ConvertVarsIn(s: string, ctx: Context): string {
		return 'expr';
	}
	DisambObjHere(ctx: Context, id: number, firstPlace: string, twoPlaces: boolean, secondPlace: string, isExit: boolean): boolean {
		var isSeen: boolean;
		var onlySeen = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		return false;
	}
	ExecClone(cloneString: string, ctx: Context): void {
		var id: number;
		var newName: string;
		var cloneTo: string;
		var SC = 'expr';
		// UNKNOWN MultiLineIfBlock
		this._numberObjs = this._numberObjs + 1;
		// UNKNOWN ReDimPreserveStatement
		this._objs[this._numberObjs] = new ObjectType();
		this._objs[this._numberObjs] = this._objs[id];
		this._objs[this._numberObjs].ContainerRoom = cloneTo;
		this._objs[this._numberObjs].ObjectName = newName;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	ExecOops(correction: string, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
	}
	ExecType(typeData: string, ctx: Context): void {
		var id: number;
		var found: boolean;
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var objName = 'expr';
		var typeName = 'expr';
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var o = this._objs[id];
		o.NumberTypesIncluded = o.NumberTypesIncluded + 1;
		// UNKNOWN ReDimPreserveStatement
		'expr' = typeName;
		var propertyData = 'expr';
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
	}
	ExecuteIfAction(actionData: string): boolean {
		var id: number;
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var objName = 'expr';
		var actionName = 'expr';
		var found = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var o = this._objs[id];
		// UNKNOWN ForBlock
		return false;
	}
	ExecuteIfType(typeData: string): boolean {
		var id: number;
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var objName = 'expr';
		var typeName = 'expr';
		var found = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var o = this._objs[id];
		// UNKNOWN ForBlock
		return false;
	}
	GetArrayIndex(varName: string, ctx: Context): ArrayResult {
		var result: ArrayResult = new ArrayResult();
		// UNKNOWN MultiLineIfBlock
		var beginPos = 'expr';
		var endPos = 'expr';
		var data = 'expr';
		// UNKNOWN MultiLineIfBlock
		result.Name = 'expr';
		return result;
	}
	Disambiguate(name: string, containedIn: string, ctx: Context, isExit: boolean): number {
		var numberCorresIds = 0;
		var idNumbers: number[] = [];
		var firstPlace: string;
		var secondPlace: string = "";
		var twoPlaces: boolean;
		var descriptionText: string[];
		var validNames: string[];
		var numValidNames: number;
		name = 'expr';
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		this._thisTurnIt = 0;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		this._thisTurnIt = this._lastIt;
		// UNKNOWN ExpressionStatement
		return -1;
	}
	DisplayStatusVariableInfo(id: number, type: VarType, ctx: Context): string {
		var displayData: string = "";
		var ep: number;
		// UNKNOWN MultiLineIfBlock
		return displayData;
	}
	DoAction(ObjID: number, ActionName: string, ctx: Context, LogError: boolean): boolean {
		var FoundAction: boolean;
		var ActionScript: string = "";
		var o = this._objs[ObjID];
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var NewThread: Context = 'expr';
		NewThread.CallingObjectId = ObjID;
		// UNKNOWN ExpressionStatement
		return true;
	}
	HasAction(ObjID: number, ActionName: string): boolean {
		var o = this._objs[ObjID];
		// UNKNOWN ForBlock
		return false;
	}
	ExecForEach(scriptLine: string, ctx: Context): void {
		var inLocation: string;
		var scriptToRun: string;
		var isExit: boolean;
		var isRoom: boolean;
		// UNKNOWN MultiLineIfBlock
		scriptLine = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
	}
	ExecuteAction(data: string, ctx: Context): void {
		var actionName: string;
		var script: string;
		var actionNum: number;
		var id: number;
		var foundExisting = false;
		var foundObject = false;
		var param = 'expr';
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var objName = 'expr';
		actionName = 'expr';
		var ep = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var o = this._objs[id];
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		'expr'.ActionName = actionName;
		'expr'.Script = script;
		// UNKNOWN ExpressionStatement
	}
	ExecuteCondition(condition: string, ctx: Context): boolean {
		var result: boolean;
		var thisNot: boolean;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN SingleLineIfStatement
		return result;
	}
	ExecuteConditions(list: string, ctx: Context): boolean {
		var conditions: string[];
		var numConditions = 0;
		var operations: string[];
		var obscuredConditionList = 'expr';
		var pos = 1;
		var isFinalCondition = false;
		// UNKNOWN DoLoopUntilBlock
		operations[0] = "AND";
		var result = true;
		// UNKNOWN ForBlock
		return result;
	}
	ExecuteCreate(data: string, ctx: Context): void {
		var newName: string;
		// UNKNOWN MultiLineIfBlock
	}
	ExecuteCreateExit(data: string, ctx: Context): void {
		var scrRoom: string;
		var destRoom: string = "";
		var destId: number;
		var exitData = 'expr';
		var newName = 'expr';
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var srcId = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var exists = false;
		// UNKNOWN MultiLineIfBlock
		var paramPos = 'expr';
		var saveData: string;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		var r = this._rooms[srcId];
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecDrop(obj: string, ctx: Context): void {
		var found: boolean;
		var parentId: number;
		var id: number;
		id = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var isInContainer = false;
		// UNKNOWN MultiLineIfBlock
		var dropFound = false;
		var dropStatement: string = "";
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecExamine(command: string, ctx: Context): void {
		var item = 'expr';
		// UNKNOWN MultiLineIfBlock
		var id = 'expr';
		// UNKNOWN MultiLineIfBlock
		var o = this._objs[id];
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
	}
	ExecMoveThing(data: string, type: Thing, ctx: Context): void {
		var scp = 'expr';
		var name = 'expr';
		var place = 'expr';
		// UNKNOWN ExpressionStatement
	}
	ExecProperty(data: string, ctx: Context): void {
		var id: number;
		var found: boolean;
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var name = 'expr';
		var properties = 'expr';
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	ExecuteDo(procedureName: string, ctx: Context): void {
		var newCtx: Context = 'expr';
		var numParameters = 0;
		var useNewCtx: boolean;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var block = 'expr';
		// UNKNOWN MultiLineIfBlock
	}
	ExecuteDoAction(data: string, ctx: Context): void {
		var id: number;
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var objName = 'expr';
		var actionName = 'expr';
		var found = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	ExecuteIfHere(obj: string, ctx: Context): boolean {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		return false;
	}
	ExecuteIfExists(obj: string, realOnly: boolean): boolean {
		var result: boolean;
		var errorReport = false;
		var scp: number;
		// UNKNOWN MultiLineIfBlock
		var found = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		return result;
	}
	ExecuteIfProperty(data: string): boolean {
		var id: number;
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var objName = 'expr';
		var propertyName = 'expr';
		var found = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		return 'expr' == "yes";
	}
	ExecuteRepeat(data: string, ctx: Context): void {
		var repeatWhileTrue: boolean;
		var repeatScript: string = "";
		var bracketPos: number;
		var afterBracket: string;
		var foundScript = false;
		// UNKNOWN MultiLineIfBlock
		var pos = 1;
		// UNKNOWN DoLoopUntilBlock
		var conditions = 'expr';
		var finished = false;
		// UNKNOWN DoLoopUntilBlock
	}
	ExecuteSetCollectable(param: string, ctx: Context): void {
		var val: number;
		var id: number;
		var scp = 'expr';
		var name = 'expr';
		var newVal = 'expr';
		var found = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var op = 'expr';
		var newValue = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	ExecuteWait(waitLine: string, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	InitFileData(fileData: string): void {
		this._fileData = fileData;
		this._fileDataPos = 1;
	}
	GetNextChunk(): string {
		var nullPos = 'expr';
		var result = 'expr';
		// UNKNOWN MultiLineIfBlock
		return result;
	}
	GetFileDataChars(count: number): string {
		var result = 'expr';
		this._fileDataPos = this._fileDataPos + count;
		return result;
	}
	GetObjectActions(actionInfo: string): ActionType {
		var name = 'expr';
		var ep = 'expr';
		// UNKNOWN MultiLineIfBlock
		var script = 'expr';
		var result: ActionType = new ActionType();
		result.ActionName = name;
		result.Script = script;
		return result;
	}
	GetObjectId(name: string, ctx: Context, room: string): number {
		var id: number;
		var found = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		return -1;
	}
	GetObjectIdNoAlias(name: string): number {
		// UNKNOWN ForBlock
		return 0;
	}
	GetObjectProperty(name: string, id: number, existsOnly: boolean, logError: boolean): string {
		var result: string = "";
		var found = false;
		var o = this._objs[id];
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		return "";
	}
	GetPropertiesInType(type: string, err: boolean): PropertiesActions {
		var blockId: number;
		var propertyList: PropertiesActions = new PropertiesActions();
		var found = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		return propertyList;
	}
	GetRoomID(name: string, ctx: Context): number {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		return 0;
	}
	GetTextOrScript(textScript: string): TextAction {
		var result = new TextAction();
		textScript = 'expr';
		// UNKNOWN MultiLineIfBlock
		return result;
	}
	GetThingNumber(name: string, room: string, type: Thing): number {
		// UNKNOWN MultiLineIfBlock
		return -1;
	}
	GetThingBlock(name: string, room: string, type: Thing): DefineBlock {
		var result = new DefineBlock();
		// UNKNOWN MultiLineIfBlock
		result.StartLine = 0;
		result.EndLine = 0;
		return result;
	}
	MakeRestoreData(): string {
		var data: any = {};
		var objectData: ChangeType[] = [];
		var roomData: ChangeType[] = [];
		var numObjectData: number;
		var numRoomData: number;
		// UNKNOWN ExpressionStatement
		var start = data.Length + 1;
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ForEachBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		var dataString: string;
		var newFileData: any = {};
		dataString = 'expr';
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		return 'expr';
	}
	MoveThing(name: string, room: string, type: Thing, ctx: Context): void {
		var oldRoom: string = "";
		var id = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
	}
	Pause(duration: number): void {
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN SyncLockBlock
	}
	ConvertParameter(parameter: string, convertChar: string, action: ConvertType, ctx: Context): string {
		var result: string = "";
		var pos = 1;
		var finished = false;
		// UNKNOWN DoLoopUntilBlock
		return result;
	}
	DoFunction(data: string, ctx: Context): string {
		var name: string;
		var parameter: string;
		var intFuncResult: string = "";
		var intFuncExecuted = false;
		var paramPos = 'expr';
		// UNKNOWN MultiLineIfBlock
		var block: DefineBlock;
		block = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	DoInternalFunction(name: string, parameter: string, ctx: Context): string {
		var parameters: string[];
		var untrimmedParameters: string[];
		var objId: number;
		var numParameters = 0;
		var pos = 1;
		// UNKNOWN MultiLineIfBlock
		var param2: string;
		var param3: string;
		// UNKNOWN MultiLineIfBlock
		return "__NOTDEFINED";
	}
	ExecFor(line: string, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
		var endValue: number;
		var stepValue: number;
		var forData = 'expr';
		var scp1 = 'expr';
		var scp2 = 'expr';
		var scp3 = 'expr';
		var counterVariable = 'expr';
		var startValue = 'expr';
		// UNKNOWN MultiLineIfBlock
		var loopScript = 'expr';
		// UNKNOWN ForBlock
	}
	ExecSetVar(varInfo: string, ctx: Context): void {
		var scp = 'expr';
		var varName = 'expr';
		var varCont = 'expr';
		var idx = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN TryBlock
	}
	ExecuteIfAsk(question: string): boolean {
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN SyncLockBlock
		return this._questionResponse;
	}
	SetQuestionResponse(response: boolean): void {
		var runnerThread: any = {};
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	SetQuestionResponseInNewThread(response: Object): void {
		this._questionResponse = 'expr';
		// UNKNOWN SyncLockBlock
	}
	ExecuteIfGot(item: string): boolean {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		return false;
	}
	ExecuteIfHas(condition: string): boolean {
		var checkValue: number;
		var colNum: number;
		var scp = 'expr';
		var name = 'expr';
		var newVal = 'expr';
		var found = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var op = 'expr';
		var newValue = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		return false;
	}
	ExecuteIfIs(condition: string): boolean {
		var value1: string;
		var value2: string;
		var op: string;
		var expectNumerics: boolean;
		var expResult: ExpressionResult;
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var scp2 = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var result = false;
		// UNKNOWN SelectBlock
		// UNKNOWN MultiLineIfBlock
		return result;
	}
	GetNumericContents(name: string, ctx: Context, noError: boolean): number {
		var numNumber: number;
		var arrayIndex: number;
		var exists = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		return 'expr';
	}
	PlayerErrorMessage(e: PlayerError, ctx: Context): void {
		// UNKNOWN ExpressionStatement
	}
	PlayerErrorMessage_ExtendInfo(e: PlayerError, ctx: Context, extraInfo: string): void {
		var message = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	GetErrorMessage(e: PlayerError, ctx: Context): string {
		return 'expr';
	}
	PlayMedia(filename: string): void {
		// UNKNOWN ExpressionStatement
	}
	PlayMedia(filename: string, sync: boolean, looped: boolean): void {
		// UNKNOWN MultiLineIfBlock
	}
	PlayWav(parameter: string): void {
		var sync: boolean = false;
		var looped: boolean = false;
		var params: any = {};
		params = new any();
		var filename = 'expr';
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	RestoreGameData(fileData: string): void {
		var appliesTo: string;
		var data: string = "";
		var objId: number;
		var timerNum: number;
		var varUbound: number;
		var found: boolean;
		var numStoredData: number;
		var storedData: ChangeType[] = [];
		var decryptedFile: any = {};
		// UNKNOWN ForBlock
		this._fileData = 'expr';
		this._currentRoom = 'expr';
		var numData = 'expr';
		var createdObjects: any = {};
		// UNKNOWN ForBlock
		numData = 'expr';
		// UNKNOWN ForBlock
		numData = 'expr';
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
		numData = 'expr';
		// UNKNOWN ForBlock
		this._gameIsRestoring = true;
		numData = 'expr';
		// UNKNOWN ForBlock
		numData = 'expr';
		// UNKNOWN ForBlock
		this._gameIsRestoring = false;
	}
	SetBackground(col: string): void {
		// UNKNOWN ExpressionStatement
	}
	SetForeground(col: string): void {
		// UNKNOWN ExpressionStatement
	}
	SetDefaultPlayerErrorMessages(): void {
		this._playerErrorMessageString[PlayerError.BadCommand] = "I don't understand your command. Type HELP for a list of valid commands.";
		this._playerErrorMessageString[PlayerError.BadGo] = "I don't understand your use of 'GO' - you must either GO in some direction, or GO TO a place.";
		this._playerErrorMessageString[PlayerError.BadGive] = "You didn't say who you wanted to give that to.";
		this._playerErrorMessageString[PlayerError.BadCharacter] = "I can't see anybody of that name here.";
		this._playerErrorMessageString[PlayerError.NoItem] = "You don't have that.";
		this._playerErrorMessageString[PlayerError.ItemUnwanted] = "#quest.error.gender# doesn't want #quest.error.article#.";
		this._playerErrorMessageString[PlayerError.BadLook] = "You didn't say what you wanted to look at.";
		this._playerErrorMessageString[PlayerError.BadThing] = "I can't see that here.";
		this._playerErrorMessageString[PlayerError.DefaultLook] = "Nothing out of the ordinary.";
		this._playerErrorMessageString[PlayerError.DefaultSpeak] = "#quest.error.gender# says nothing.";
		this._playerErrorMessageString[PlayerError.BadItem] = "I can't see that anywhere.";
		this._playerErrorMessageString[PlayerError.DefaultTake] = "You pick #quest.error.article# up.";
		this._playerErrorMessageString[PlayerError.BadUse] = "You didn't say what you wanted to use that on.";
		this._playerErrorMessageString[PlayerError.DefaultUse] = "You can't use that here.";
		this._playerErrorMessageString[PlayerError.DefaultOut] = "There's nowhere you can go out to around here.";
		this._playerErrorMessageString[PlayerError.BadPlace] = "You can't go there.";
		this._playerErrorMessageString[PlayerError.DefaultExamine] = "Nothing out of the ordinary.";
		this._playerErrorMessageString[PlayerError.BadTake] = "You can't take #quest.error.article#.";
		this._playerErrorMessageString[PlayerError.CantDrop] = "You can't drop that here.";
		this._playerErrorMessageString[PlayerError.DefaultDrop] = "You drop #quest.error.article#.";
		this._playerErrorMessageString[PlayerError.BadDrop] = "You are not carrying such a thing.";
		this._playerErrorMessageString[PlayerError.BadPronoun] = "I don't know what '#quest.error.pronoun#' you are referring to.";
		this._playerErrorMessageString[PlayerError.BadExamine] = "You didn't say what you wanted to examine.";
		this._playerErrorMessageString[PlayerError.AlreadyOpen] = "It is already open.";
		this._playerErrorMessageString[PlayerError.AlreadyClosed] = "It is already closed.";
		this._playerErrorMessageString[PlayerError.CantOpen] = "You can't open that.";
		this._playerErrorMessageString[PlayerError.CantClose] = "You can't close that.";
		this._playerErrorMessageString[PlayerError.DefaultOpen] = "You open it.";
		this._playerErrorMessageString[PlayerError.DefaultClose] = "You close it.";
		this._playerErrorMessageString[PlayerError.BadPut] = "You didn't specify what you wanted to put #quest.error.article# on or in.";
		this._playerErrorMessageString[PlayerError.CantPut] = "You can't put that there.";
		this._playerErrorMessageString[PlayerError.DefaultPut] = "Done.";
		this._playerErrorMessageString[PlayerError.CantRemove] = "You can't remove that.";
		this._playerErrorMessageString[PlayerError.AlreadyPut] = "It is already there.";
		this._playerErrorMessageString[PlayerError.DefaultRemove] = "Done.";
		this._playerErrorMessageString[PlayerError.Locked] = "The exit is locked.";
		this._playerErrorMessageString[PlayerError.DefaultWait] = "Press a key to continue...";
		this._playerErrorMessageString[PlayerError.AlreadyTaken] = "You already have that.";
	}
	SetFont(name: string): void {
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN ExpressionStatement
	}
	SetFontSize(size: number): void {
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN ExpressionStatement
	}
	SetNumericVariableContents(name: string, content: number, ctx: Context, arrayIndex: number): void {
		var numNumber: number;
		var exists = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		this._numericVariable[numNumber].VariableName = name;
		// UNKNOWN ReDimPreserveStatement
		'expr' = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	SetOpenClose(name: string, open: boolean, ctx: Context): void {
		var cmd: string;
		// UNKNOWN MultiLineIfBlock
		var id = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	SetTimerState(name: string, state: boolean): void {
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
	}
	SetUnknownVariableType(variableData: string, ctx: Context): SetResult {
		var scp = 'expr';
		// UNKNOWN MultiLineIfBlock
		var name = 'expr';
		// UNKNOWN MultiLineIfBlock
		var contents = 'expr';
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
		return SetResult.Unfound;
	}
	SetUpChoiceForm(blockName: string, ctx: Context): string {
		var block = 'expr';
		var prompt = 'expr';
		var menuOptions: any = {};
		var menuScript: any = {};
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		var mnu: MenuData = new MenuData();
		var choice: string = 'expr';
		// UNKNOWN ExpressionStatement
		return 'expr';
	}
	SetUpDefaultFonts(): void {
		var gameblock = 'expr';
		this._defaultFontName = "Arial";
		this._defaultFontSize = 9;
		// UNKNOWN ForBlock
	}
	SetUpDisplayVariables(): void {
		// UNKNOWN ForBlock
	}
	SetUpGameObject(): void {
		this._numberObjs = 1;
		// UNKNOWN ReDimStatement
		this._objs[1] = new ObjectType();
		var o = this._objs[1];
		o.ObjectName = "game";
		o.ObjectAlias = "";
		o.Visible = false;
		o.Exists = true;
		var nestBlock = 0;
		// UNKNOWN ForBlock
	}
	SetUpMenus(): void {
		var exists: boolean = false;
		var menuTitle: string = "";
		var menuOptions: any = {};
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
	}
	SetUpOptions(): void {
		var opt: string;
		// UNKNOWN ForBlock
	}
	SetUpRoomData(): void {
		var defaultProperties: PropertiesActions = new PropertiesActions();
		var defaultExists = false;
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
	}
	SetUpSynonyms(): void {
		var block = 'expr';
		this._numberSynonyms = 0;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
	}
	SetUpTimers(): void {
		// UNKNOWN ForBlock
	}
	SetUpTurnScript(): void {
		var block = 'expr';
		this._beforeTurnScript = "";
		this._afterTurnScript = "";
		// UNKNOWN ForBlock
	}
	SetUpUserDefinedPlayerErrors(): void {
		var block = 'expr';
		var examineIsCustomised = false;
		// UNKNOWN ForBlock
	}
	SetVisibility(thing: string, type: Thing, visible: boolean, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	ShowPictureInText(filename: string): void {
		// UNKNOWN MultiLineIfBlock
	}
	ShowRoomInfoV2(Room: string): void {
		var roomDisplayText: string = "";
		var descTagExist: boolean;
		var gameBlock: DefineBlock;
		var charsViewable: string;
		var charsFound: number;
		var prefixAliasNoFormat: string;
		var prefix: string;
		var prefixAlias: string;
		var inDesc: string;
		var aliasName: string = "";
		var charList: string;
		var foundLastComma: number;
		var cp: number;
		var ncp: number;
		var noFormatObjsViewable: string;
		var objsViewable: string = "";
		var objsFound: number;
		var objListString: string;
		var noFormatObjListString: string;
		var possDir: string;
		var nsew: string;
		var doorways: string;
		var places: string;
		var place: string;
		var aliasOut: string = "";
		var placeNoFormat: string;
		var descLine: string = "";
		var lastComma: number;
		var oldLastComma: number;
		var defineBlock: number;
		var lookString: string = "";
		gameBlock = 'expr';
		this._currentRoom = Room;
		var roomBlock: DefineBlock;
		roomBlock = 'expr';
		var finishedFindingCommas: boolean;
		charsViewable = "";
		charsFound = 0;
		// UNKNOWN ForBlock
		// UNKNOWN SingleLineIfStatement
		prefix = 'expr';
		// UNKNOWN MultiLineIfBlock
		inDesc = "unfound";
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		roomDisplayText = roomDisplayText + charsViewable + vbCrLf;
		noFormatObjsViewable = "";
		// UNKNOWN ForBlock
		var finishedLoop: boolean;
		// UNKNOWN MultiLineIfBlock
		doorways = "";
		nsew = "";
		places = "";
		possDir = "";
		// UNKNOWN ForBlock
		var outside: DefineBlock;
		// UNKNOWN MultiLineIfBlock
		var finished: boolean;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		descTagExist = false;
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		defineBlock = 0;
		// UNKNOWN ForBlock
		// UNKNOWN SingleLineIfStatement
	}
	Speak(text: string): void {
		// UNKNOWN ExpressionStatement
	}
	AddToObjectList(objList: any, exitList: any, name: string, type: Thing): void {
		name = 'expr';
		// UNKNOWN MultiLineIfBlock
	}
	ExecExec(scriptLine: string, ctx: Context): void {
		// UNKNOWN SingleLineIfStatement
		var execLine = 'expr';
		var newCtx: Context = 'expr';
		newCtx.StackCounter = newCtx.StackCounter + 1;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecSetString(info: string, ctx: Context): void {
		var scp = 'expr';
		var name = 'expr';
		var value = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var idx = 'expr';
		// UNKNOWN ExpressionStatement
	}
	ExecUserCommand(cmd: string, ctx: Context, libCommands: boolean): boolean {
		var curCmd: string;
		var commandList: string;
		var script: string = "";
		var commandTag: string;
		var commandLine: string = "";
		var foundCommand = false;
		var roomId = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		return foundCommand;
	}
	ExecuteChoose(section: string, ctx: Context): void {
		// UNKNOWN ExpressionStatement
	}
	GetCommandParameters(test: string, required: string, ctx: Context): boolean {
		var chunksBegin: number[];
		var chunksEnd: number[];
		var varName: string[];
		var var2Pos: number;
		test = "�" + 'expr' + "�";
		required = "�" + required + "�";
		var currentReqLinePos = 1;
		var currentTestLinePos = 1;
		var finished = false;
		var numberChunks = 0;
		// UNKNOWN DoLoopUntilBlock
		var success = true;
		// UNKNOWN ForBlock
		return success;
	}
	GetGender(character: string, capitalise: boolean, ctx: Context): string {
		var result: string;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN SingleLineIfStatement
		return result;
	}
	GetStringContents(name: string, ctx: Context): string {
		var returnAlias = false;
		var arrayIndex = 0;
		var cp = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var exists = false;
		var id: number;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	IsAvailable(thingName: string, type: Thing, ctx: Context): boolean {
		var room: string;
		var name: string;
		var atPos = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	IsCompatible(test: string, required: string): boolean {
		var var2Pos: number;
		test = "�" + 'expr' + "�";
		required = "�" + required + "�";
		var currentReqLinePos = 1;
		var currentTestLinePos = 1;
		var finished = false;
		// UNKNOWN DoLoopUntilBlock
		return true;
	}
	OpenGame(filename: string): boolean {
		var cdatb: boolean;
		var result: boolean;
		var visible: boolean;
		var room: string;
		var fileData: string = "";
		var savedQsgVersion: string;
		var data: string = "";
		var name: string;
		var scp: number;
		var cdat: number;
		var scp2: number;
		var scp3: number;
		var lines: string[] = 'expr';
		this._gameLoadMethod = "loaded";
		var prevQsgVersion = false;
		// UNKNOWN MultiLineIfBlock
		savedQsgVersion = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		result = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		this._saveGameFile = filename;
		return true;
	}
	SaveGame(filename: string, saveFile: boolean): Byte[] {
		var ctx: Context = new Context();
		var saveData: string;
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		this._saveGameFile = filename;
		return 'expr';
	}
	MakeRestoreDataV2(): string {
		var lines: any = {};
		var i: number;
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		return 'expr';
	}
	SetAvailability(thingString: string, exists: boolean, ctx: Context, type: Thing): void {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	SetStringContents(name: string, value: string, ctx: Context, arrayIndex: number): void {
		var id: number;
		var exists = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		this._stringVariable[id].VariableName = name;
		// UNKNOWN ReDimPreserveStatement
		'expr' = value;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	SetUpCharObjectInfo(): void {
		var defaultProperties: PropertiesActions = new PropertiesActions();
		this._numberChars = 0;
		var defaultExists = false;
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
	}
	ShowGameAbout(ctx: Context): void {
		var version = 'expr';
		var author = 'expr';
		var copyright = 'expr';
		var info = 'expr';
		// UNKNOWN ExpressionStatement
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
	}
	ShowPicture(filename: string): void {
		var caption: string = "";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN ExpressionStatement
	}
	ShowRoomInfo(room: string, ctx: Context, noPrint: boolean): void {
		// UNKNOWN MultiLineIfBlock
		var roomDisplayText: string = "";
		var descTagExist: boolean;
		var doorwayString: string;
		var roomAlias: string;
		var finishedFindingCommas: boolean;
		var prefix: string;
		var roomDisplayName: string;
		var roomDisplayNameNoFormat: string;
		var inDescription: string;
		var visibleObjects: string = "";
		var visibleObjectsNoFormat: string;
		var placeList: string;
		var lastComma: number;
		var oldLastComma: number;
		var descType: number;
		var descLine: string = "";
		var showLookText: boolean;
		var lookDesc: string = "";
		var objLook: string;
		var objSuffix: string;
		var gameBlock = 'expr';
		this._currentRoom = room;
		var id = 'expr';
		// UNKNOWN SingleLineIfStatement
		roomAlias = this._rooms[id].RoomAlias;
		// UNKNOWN SingleLineIfStatement
		prefix = this._rooms[id].Prefix;
		// UNKNOWN MultiLineIfBlock
		inDescription = this._rooms[id].InDescription;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		visibleObjectsNoFormat = "";
		var visibleObjectsList: any = {};
		var count: number;
		// UNKNOWN ForBlock
		// UNKNOWN ForEachBlock
		// UNKNOWN MultiLineIfBlock
		doorwayString = 'expr';
		// UNKNOWN MultiLineIfBlock
		objLook = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		showLookText = true;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	CheckCollectable(id: number): void {
		var max: number;
		var value: number;
		var min: number;
		var m: number;
		var type = this._collectables[id].Type;
		value = this._collectables[id].Value;
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		this._collectables[id].Value = value;
	}
	DisplayCollectableInfo(id: number): string {
		var display: string;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		return display;
	}
	DisplayTextSection(section: string, ctx: Context, OutputTo: string): void {
		var block: DefineBlock;
		block = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
	}
	ExecCommand(input: string, ctx: Context, echo: boolean, runUserCommand: boolean, dontSetIt: boolean): boolean {
		var parameter: string;
		var skipAfterTurn = false;
		input = 'expr';
		var oldBadCmdBefore = this._badCmdBefore;
		var roomID = 'expr';
		var enteredHelpCommand = false;
		// UNKNOWN SingleLineIfStatement
		var cmd = 'expr';
		// UNKNOWN SyncLockBlock
		var userCommandReturn: boolean;
		// UNKNOWN MultiLineIfBlock
		input = 'expr';
		// UNKNOWN ExpressionStatement
		var newCommand = " " + input + " ";
		// UNKNOWN ForBlock
		input = 'expr';
		// UNKNOWN ExpressionStatement
		var newCtx: Context = 'expr';
		var globalOverride = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		var invList = "";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN SingleLineIfStatement
		return true;
	}
	CmdStartsWith(cmd: string, startsWith: string): boolean {
		return 'expr';
	}
	ExecGive(giveString: string, ctx: Context): void {
		var article: string;
		var item: string;
		var character: string;
		var type: Thing;
		var id: number;
		var script: string = "";
		var toPos = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecLook(lookLine: string, ctx: Context): void {
		var item: string;
		// UNKNOWN MultiLineIfBlock
	}
	ExecSpeak(cmd: string, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
		var name = cmd;
		// UNKNOWN MultiLineIfBlock
	}
	ExecTake(item: string, ctx: Context): void {
		var parentID: number;
		var parentDisplayName: string;
		var foundItem = true;
		var foundTake = false;
		var id = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var isInContainer = false;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecUse(useLine: string, ctx: Context): void {
		var endOnWith: number;
		var useDeclareLine = "";
		var useOn: string;
		var useItem: string;
		useLine = 'expr';
		var roomId: number;
		roomId = 'expr';
		var onWithPos = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		var id: number;
		var notGotItem: boolean;
		// UNKNOWN MultiLineIfBlock
		var useScript: string = "";
		var foundUseScript: boolean;
		var foundUseOnObject: boolean;
		var useOnObjectId: number;
		var found: boolean;
		// UNKNOWN MultiLineIfBlock
	}
	ObjectActionUpdate(id: number, name: string, script: string, noUpdate: boolean): void {
		var objectName: string;
		var sp: number;
		var ep: number;
		name = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecuteIf(scriptLine: string, ctx: Context): void {
		var ifLine = 'expr';
		var obscuredLine = 'expr';
		var thenPos = 'expr';
		// UNKNOWN MultiLineIfBlock
		var conditions = 'expr';
		thenPos = thenPos + 4;
		var elsePos = 'expr';
		var thenEndPos: number;
		// UNKNOWN MultiLineIfBlock
		var thenScript = 'expr';
		var elseScript = "";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	ExecuteScript(scriptLine: string, ctx: Context, newCallingObjectId: number): void {
		// UNKNOWN TryBlock
	}
	ExecuteEnter(scriptLine: string, ctx: Context): void {
		this._commandOverrideModeOn = true;
		this._commandOverrideVariable = 'expr';
		// UNKNOWN ExpressionStatement
		// UNKNOWN SyncLockBlock
		this._commandOverrideModeOn = false;
	}
	ExecuteSet(setInstruction: string, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
	}
	FindStatement(block: DefineBlock, statement: string): string {
		// UNKNOWN ForBlock
		return "";
	}
	FindLine(block: DefineBlock, statement: string, statementParam: string): string {
		// UNKNOWN ForBlock
		return "";
	}
	GetCollectableAmount(name: string): number {
		// UNKNOWN ForBlock
		return 0;
	}
	GetSecondChunk(line: string): string {
		var endOfFirstBit = 'expr' + 1;
		var lengthOfKeyword = 'expr' + 1;
		return 'expr';
	}
	GoDirection(direction: string, ctx: Context): void {
		var dirData: TextAction = new TextAction();
		var id = 'expr';
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		var r = this._rooms[id];
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	GoToPlace(place: string, ctx: Context): void {
		var destination = "";
		var placeData: string;
		var disallowed = false;
		placeData = 'expr';
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	InitialiseGame(filename: string, fromQsg: boolean): boolean {
		this._loadedFromQsg = fromQsg;
		this._changeLogRooms = new ChangeLog();
		this._changeLogObjects = new ChangeLog();
		this._changeLogRooms.AppliesToType = ChangeLog.AppliesTo.Room;
		this._changeLogObjects.AppliesToType = ChangeLog.AppliesTo.Object;
		this._outPutOn = true;
		this._useAbbreviations = true;
		this._gamePath = 'expr' + "\\";
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		var gameBlock: DefineBlock;
		gameBlock = 'expr';
		var aslVersion = "//";
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		this._gameName = 'expr';
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		this._gameFileName = filename;
		// UNKNOWN ExpressionStatement
		this._defaultRoomProperties = 'expr';
		this._defaultProperties = 'expr';
		return true;
	}
	PlaceExist(placeName: string, ctx: Context): string {
		var roomId = 'expr';
		var foundPlace = false;
		var scriptPresent = false;
		var r = this._rooms[roomId];
		// UNKNOWN ForBlock
		return "";
	}
	PlayerItem(item: string, got: boolean, ctx: Context, objId: number): void {
		var foundObjectName = false;
		// UNKNOWN MultiLineIfBlock
	}
	PlayGame(room: string, ctx: Context): void {
		var id = 'expr';
		// UNKNOWN MultiLineIfBlock
		this._currentRoom = room;
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
	}
	Print(txt: string, ctx: Context, OutputTo: string): void {
		var printString = "";
		// UNKNOWN MultiLineIfBlock
	}
	RetrLine(blockType: string, param: string, line: string, ctx: Context): string {
		var searchblock: DefineBlock;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		return "<unfound>";
	}
	RetrLineParam(blockType: string, param: string, line: string, lineParam: string, ctx: Context): string {
		var searchblock: DefineBlock;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
		return "<unfound>";
	}
	SetUpCollectables(): void {
		var lastItem = false;
		this._numCollectables = 0;
		// UNKNOWN ForBlock
	}
	SetUpItemArrays(): void {
		var lastItem = false;
		this._numberItems = 0;
		// UNKNOWN ForBlock
	}
	SetUpStartItems(): void {
		var lastItem = false;
		// UNKNOWN ForBlock
	}
	ShowHelp(ctx: Context): void {
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	ReadCatalog(data: string): void {
		var nullPos = 'expr';
		this._numResources = 'expr';
		// UNKNOWN ReDimPreserveStatement
		this._resources[this._numResources] = new ResourceType();
		data = 'expr';
		var resourceStart = 0;
		// UNKNOWN ForBlock
	}
	UpdateDirButtons(dirs: string, ctx: Context): void {
		var compassExits: any = {};
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		this._compassExits = compassExits;
		// UNKNOWN ExpressionStatement
	}
	AddCompassExit(exitList: any, name: string): void {
		// UNKNOWN ExpressionStatement
	}
	UpdateDoorways(roomId: number, ctx: Context): string {
		var roomDisplayText: string = "";
		var directions: string = "";
		var outPlacePrefix: string = "";
		var n = "north";
		var s = "south";
		var e = "east";
		var w = "west";
		var ne = "northeast";
		var nw = "northwest";
		var se = "southeast";
		var sw = "southwest";
		var u = "up";
		var d = "down";
		var o = "out";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		return roomDisplayText;
	}
	UpdateItems(ctx: Context): void {
		var invList: any = {};
		// UNKNOWN SingleLineIfStatement
		var name: string;
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN RaiseEventStatement
		// UNKNOWN MultiLineIfBlock
	}
	FinishGame(stopType: StopType, ctx: Context): void {
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	UpdateObjectList(ctx: Context): void {
		var shownPlaceName: string;
		var objSuffix: string;
		var charsFound: number;
		var noFormatObjsViewable: string;
		var charList: string;
		var objsFound: number;
		var objListString: string;
		var noFormatObjListString: string;
		// UNKNOWN SingleLineIfStatement
		var objList: any = {};
		var exitList: any = {};
		var roomBlock: DefineBlock;
		roomBlock = 'expr';
		// UNKNOWN MultiLineIfBlock
		noFormatObjsViewable = "";
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		var roomId: number;
		roomId = 'expr';
		var r = this._rooms[roomId];
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN RaiseEventStatement
		this._gotoExits = exitList;
		// UNKNOWN ExpressionStatement
	}
	UpdateExitsList(): void {
		var mergedList: any = {};
		// UNKNOWN ForEachBlock
		// UNKNOWN ForEachBlock
		// UNKNOWN RaiseEventStatement
	}
	UpdateStatusVars(ctx: Context): void {
		var displayData: string;
		var status: string = "";
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	UpdateVisibilityInContainers(ctx: Context, onlyParent: string): void {
		var parentId: number;
		var parent: string;
		var parentIsTransparent: boolean;
		var parentIsOpen: boolean;
		var parentIsSeen: boolean;
		var parentIsSurface: boolean;
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ForBlock
	}
	PlayerCanAccessObject(id: number, colObjects: any): PlayerCanAccessObjectResult {
		var parent: string;
		var parentId: number;
		var parentDisplayName: string;
		var result: PlayerCanAccessObjectResult = new PlayerCanAccessObjectResult();
		var hierarchy: string = "";
		// UNKNOWN MultiLineIfBlock
		result.CanAccessObject = true;
		return result;
	}
	GetGoToExits(roomId: number, ctx: Context): string {
		var placeList: string = "";
		var shownPlaceName: string;
		// UNKNOWN ForBlock
		return placeList;
	}
	SetUpExits(): void {
		// UNKNOWN ForBlock
		// UNKNOWN ExitSubStatement
	}
	FindExit(tag: string): RoomExit {
		var params = 'expr';
		// UNKNOWN MultiLineIfBlock
		var room = 'expr';
		var exitName = 'expr';
		var roomId = 'expr';
		// UNKNOWN MultiLineIfBlock
		var exits = this._rooms[roomId].Exits;
		var dir = 'expr';
		// UNKNOWN MultiLineIfBlock
		return null;
	}
	ExecuteLock(tag: string, lock: boolean): void {
		var roomExit: RoomExit;
		roomExit = 'expr';
		// UNKNOWN MultiLineIfBlock
		roomExit.IsLocked = lock;
	}
	Begin(): void {
		var runnerThread: any = {};
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN SyncLockBlock
	}
	DoBegin(): void {
		var gameBlock: DefineBlock = 'expr';
		var ctx: Context = new Context();
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN ForBlock
		this._autoIntro = true;
		// UNKNOWN MultiLineIfBlock
		this._gameFullyLoaded = true;
		// UNKNOWN SingleLineIfStatement
		var startRoom: string = "";
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	// UNKNOWN PropertyBlock
	// UNKNOWN PropertyBlock
	Finish(): void {
		// UNKNOWN ExpressionStatement
	}
	// UNKNOWN EventStatement
	// UNKNOWN EventStatement
	// UNKNOWN EventStatement
	Save(filename: string, html: string): void {
		// UNKNOWN ExpressionStatement
	}
	Save(html: string): Byte[] {
		return 'expr';
	}
	// UNKNOWN PropertyBlock
	SendCommand(command: string): void {
		// UNKNOWN ExpressionStatement
	}
	SendCommand(command: string, metadata: any): void {
		// UNKNOWN ExpressionStatement
	}
	SendCommand(command: string, elapsedTime: number, metadata: any): void {
		// UNKNOWN SingleLineIfStatement
		var runnerThread: any = {};
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN MultiLineIfBlock
	}
	WaitForStateChange(changedFromState: State): void {
		// UNKNOWN SyncLockBlock
	}
	ProcessCommandInNewThread(command: Object): void {
		// UNKNOWN TryBlock
	}
	SendEvent(eventName: string, param: string): void {
	}
	// UNKNOWN EventStatement
	Initialise(player: IPlayer): boolean {
		this._player = player;
		// UNKNOWN MultiLineIfBlock
	}
	GameFinished(): void {
		this._gameFinished = true;
		// UNKNOWN RaiseEventStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN SyncLockBlock
		// UNKNOWN SyncLockBlock
		// UNKNOWN SyncLockBlock
		// UNKNOWN ExpressionStatement
	}
	GetResourcePath(filename: string): string {
		// UNKNOWN MultiLineIfBlock
		return 'expr';
	}
	Cleanup(): void {
		// UNKNOWN ExpressionStatement
	}
	DeleteDirectory(dir: string): void {
		// UNKNOWN MultiLineIfBlock
	}
	Finalize(): void {
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	GetLibraryLines(libName: string): string[] {
		var libCode: Byte[] = null;
		libName = 'expr';
		// UNKNOWN SelectBlock
		// UNKNOWN SingleLineIfStatement
		return 'expr';
	}
	// UNKNOWN PropertyBlock
	Tick(elapsedTime: number): void {
		var i: number;
		var timerScripts: any = {};
		// UNKNOWN ExpressionStatement
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
		// UNKNOWN ExpressionStatement
	}
	RunTimersInNewThread(scripts: Object): void {
		var scriptList: any = 'expr';
		// UNKNOWN ForEachBlock
		// UNKNOWN ExpressionStatement
	}
	RaiseNextTimerTickRequest(): void {
		var anyTimerActive: boolean = false;
		var nextTrigger: number = 60;
		// UNKNOWN ForBlock
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN SingleLineIfStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN RaiseEventStatement
	}
	ChangeState(newState: State): void {
		var acceptCommands: boolean = 'expr';
		// UNKNOWN ExpressionStatement
	}
	ChangeState(newState: State, acceptCommands: boolean): void {
		this._readyForCommand = acceptCommands;
		// UNKNOWN SyncLockBlock
	}
	FinishWait(): void {
		// UNKNOWN SingleLineIfStatement
		var runnerThread: any = {};
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	FinishWaitInNewThread(): void {
		// UNKNOWN SyncLockBlock
	}
	FinishPause(): void {
		// UNKNOWN ExpressionStatement
	}
	m_menuResponse: string;
	ShowMenu(menuData: MenuData): string {
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN SyncLockBlock
		return this.m_menuResponse;
	}
	SetMenuResponse(response: string): void {
		var runnerThread: any = {};
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
		// UNKNOWN ExpressionStatement
	}
	SetMenuResponseInNewThread(response: Object): void {
		this.m_menuResponse = 'expr';
		// UNKNOWN SyncLockBlock
	}
	LogException(ex: Exception): void {
		// UNKNOWN RaiseEventStatement
	}
	GetExternalScripts(): any {
		return null;
	}
	GetExternalStylesheets(): any {
		return null;
	}
	// UNKNOWN EventStatement
	// UNKNOWN PropertyBlock
	GetOriginalFilenameForQSG(): string {
		// UNKNOWN SingleLineIfStatement
		return this._gameFileName;
	}
	// UNKNOWN DelegateFunctionStatement
	m_unzipFunction: UnzipFunctionDelegate;
	SetUnzipFunction(unzipFunction: UnzipFunctionDelegate): void {
		this.m_unzipFunction = unzipFunction;
	}
	GetUnzippedFile(filename: string): string {
		var tempDir: string = null;
		var result: string = 'expr';
		this._tempFolder = tempDir;
		return result;
	}
	// UNKNOWN PropertyBlock
	// UNKNOWN PropertyBlock
	GetResource(file: string): any {
		// UNKNOWN MultiLineIfBlock
		var path: string = 'expr';
		// UNKNOWN SingleLineIfStatement
		return new any();
	}
	m_gameId: string;
	// UNKNOWN PropertyBlock
	GetResources(): any {
		// UNKNOWN ForBlock
		// UNKNOWN MultiLineIfBlock
	}
	GetResourcelessCAS(): Byte[] {
		var fileData: string = 'expr';
		return 'expr';
	}
}
