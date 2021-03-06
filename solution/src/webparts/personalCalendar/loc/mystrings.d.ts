declare interface IPersonalCalendarWebPartStrings {
  AllDay: string;
  DaysInAdvance: string;
  Error: string;
  Hour: string;
  Hours: string;
  Loading: string;
  Minutes: string;
  NoMeetings: string;
  NumMeetings: string;
  RefreshInterval: string;
  PropertyPaneDescription: string;
  ViewAll: string;
}

declare module 'PersonalCalendarWebPartStrings' {
  const strings: IPersonalCalendarWebPartStrings;
  export = strings;
}
