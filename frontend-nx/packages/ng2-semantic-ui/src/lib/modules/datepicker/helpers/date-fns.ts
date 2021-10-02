import {format, parse} from "date-fns";
import defaultLocale from "date-fns/locale/en-US";
import {IDatepickerLocaleValues} from "../../../index";

export {format, parse} from "date-fns";

interface IDateFnsLocaleValues {
  [name: string]: string[];
}

interface IDateFnsHelperOptions {
  type?: string;
}

type DateFnsHelper<U, T> = (value: U, options: IDateFnsHelperOptions) => T;
type DateFnsWeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface IDateFnsCustomLocale {
  localize: {
    weekday: DateFnsHelper<number, string>;
    weekdays: DateFnsHelper<IDateFnsHelperOptions, string[]>;
    month: DateFnsHelper<number, string>;
    months: DateFnsHelper<IDateFnsHelperOptions, string[]>;
    timeOfDay: DateFnsHelper<number, string>;
    timesOfDay: DateFnsHelper<IDateFnsHelperOptions, string[]>;
  };
  match: {
    weekdays: DateFnsHelper<string, RegExpMatchArray | null>;
    weekday?: DateFnsHelper<RegExpMatchArray, number>;
    months: DateFnsHelper<string, RegExpMatchArray | null>;
    month?: DateFnsHelper<RegExpMatchArray, number>;
    timesOfDay: DateFnsHelper<string, RegExpMatchArray | null>;
    timeOfDay?: DateFnsHelper<RegExpMatchArray, number>;
  };
  options?: {
    weekStartsOn?: number;
  };
}

// tslint:disable-next-line:max-line-length
function buildLocalizeFn(args: {formattingValues?: any, defaultWidth?: any, values?: IDateFnsLocaleValues, defaultFormattingWidth?: any, argumentCallback?: any}): DateFnsHelper<number, string> {
  return (dirtyIndex, dirtyOptions) => {
    const options = dirtyOptions || {} as any;
    const context = options.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options.width ? String(options.width) : defaultWidth;
      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback
      ? args.argumentCallback(dirtyIndex)
      : dirtyIndex;
    return valuesArray[index];
  };

  /*
  * return (dirtyIndex: number, {type}: any = {type: defaultType}) => {
    const index = indexCallback ? indexCallback(dirtyIndex) : dirtyIndex;
    return values[type][index];
  };
  * */
}

// tslint:disable-next-line:max-line-length
function buildLocalizeArrayFn(values: IDateFnsLocaleValues, defaultType: string): DateFnsHelper<IDateFnsHelperOptions, string[]> {
  return ({type}: any = {type: defaultType}) => values[type];
}

// tslint:disable-next-line:max-line-length
function buildMatchFn(patterns: IDateFnsLocaleValues, defaultType: string): DateFnsHelper<string, RegExpMatchArray | null> {
  return (dirtyString, {type}: any = {type: defaultType}) =>
    dirtyString.match(`^(${patterns[type].join("|")})`);
}

function buildParseFn(patterns: IDateFnsLocaleValues, defaultType: string): DateFnsHelper<RegExpMatchArray, number> {
  return ([, result], {type}: any = {type: defaultType}) =>
    (patterns[type] || patterns[defaultType])
      .map((p) => new RegExp(`^${p}`))
      .findIndex((pattern) => pattern.test(result));
}

export class DateFnsParser {
  private readonly _weekStartsOn: DateFnsWeekStartsOn;
  private readonly _locale: IDateFnsCustomLocale;

  private get _config(): any {
    return {
      weekStartsOn: this._weekStartsOn,
      locale: this._locale,
    };
  }

  constructor(locale: IDatepickerLocaleValues) {
    this._weekStartsOn = locale.firstDayOfWeek as DateFnsWeekStartsOn;

    const weekdayValues = {
      long: locale.weekdays,
      short: locale.weekdaysShort,
      narrow: locale.weekdaysNarrow,
    };

    const monthValues = {
      long: locale.months,
      short: locale.monthsShort,
    };

    const timeOfDayValues = {
      long: locale.timesOfDay,
      uppercase: locale.timesOfDayUppercase,
      lowercase: locale.timesOfDayLowercase,
    };

    const timeOfDayMatchValues = {
      long: locale.timesOfDay,
      short: locale.timesOfDayUppercase.concat(locale.timesOfDayLowercase),
    };

    this._locale = defaultLocale as any;
    this._locale.localize = {
      ...this._locale.localize,
      ...{
        weekday: buildLocalizeFn({values: weekdayValues, defaultWidth: "long"}),
        weekdays: buildLocalizeArrayFn(weekdayValues, "long"),
        month: buildLocalizeFn({values: monthValues, defaultWidth: "long"}),
        months: buildLocalizeArrayFn(monthValues, "long"),
        // tslint:disable-next-line:max-line-length
        timeOfDay: buildLocalizeFn({values: timeOfDayValues, defaultWidth: "long", argumentCallback: (hours: number) => {
            return hours / 12 >= 1 ? 1 : 0;
          }}),
        timesOfDay: buildLocalizeArrayFn(timeOfDayValues, "long"),
      },
    };
    this._locale.match = {
      ...this._locale.match,
      ...{
        weekdays: buildMatchFn(weekdayValues, "long"),
        weekday: buildParseFn(weekdayValues, "long"),
        months: buildMatchFn(monthValues, "long"),
        month: buildParseFn(monthValues, "long"),
        timesOfDay: buildMatchFn(timeOfDayMatchValues, "long"),
        timeOfDay: buildParseFn(timeOfDayMatchValues, "long"),
      },
    };
  }

  public format(d: Date, f: string): string {
    return format(d, f, this._config);
  }

  public parse(dS: string, f: string, bD: Date): Date {
    return parse(dS, f, bD, this._config);
  }
}
