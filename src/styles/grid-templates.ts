enum QueueTab {
  Team = 'team',
  Queue = 'queue',
  Active = 'active',
}

export const Case = Object.freeze({
  Desktop: '5fr 3fr 8fr 7fr 7fr 6fr 9fr 100px',
  Tablet: '15fr 10fr 27fr 19fr 19fr 100px 24px',
  DesktopCompact: '5fr 3fr 7fr 6fr 9fr',
  TabletCompact: '15fr 5fr 19fr 19fr 24px',
});

export const Conversation = Object.freeze({
  Desktop: {
    [QueueTab.Queue]: '10% 16% 16% 14% 13% auto',
    [QueueTab.Active]: '10% 20% 2.4% 20% 14% auto',
    [QueueTab.Team]: '10% 18% 12% 2% 18% 12% auto',
  },
  Tablet: {
    [QueueTab.Queue]: '8.4% 22% 26% minmax(23%, auto)',
    [QueueTab.Active]: '8.4% 21% 3.3% 23.5% minmax(22%, auto)',
    [QueueTab.Team]: '8.4% 21% 3.3% 23.5% minmax(22%, auto)',
  },
});

export const PriceList = '17.8% 14.5% 14.5% auto 24px';

export const PhoneTree = Object.freeze({
  Desktop: '48px 26% 18% 1fr 48px',
});

export const Client = Object.freeze({
  Desktop: '8% 7% 20% 33% minmax(8%, auto) 48px',
  Tablet: '8% 7% 20% 30% minmax(11%, auto) 48px',
  Mobile: '50fr 40fr 24px',
});

export const Pet = Object.freeze({
  Desktop: 'repeat(6, 1fr)',
  Mobile: '1fr 1fr',
});

export const ClientCells = Object.freeze({
  Mobile: [
    { row: '1/2', col: '1/2' },
    { row: '2/3', col: '1/2' },
    { row: '1/2', col: '2/4' },
    { row: '3/4', col: '1/4' },
    { row: '2/3', col: '2/4' },
    { row: '4/5', col: '1/3' },
    { row: '4/5', col: '3/4' },
  ],
});

export const PetCells = Object.freeze({
  Mobile: [
    { row: '1/2', col: '1/2' },
    { row: '1/2', col: '2/3' },

    { row: '2/3', col: '1/2' },
    { row: '2/3', col: '2/3' },

    { row: '3/4', col: '1/2' },
    { row: '3/4', col: '2/3' },
  ],
});

export const Analytics = Object.freeze({
  Desktop: '1fr 1fr 31.5%',
  Mobile: '100%',
});

export const AnalyticsCells = Object.freeze({
  Mobile: [
    { row: '1/2', col: '1/2' },
    { row: '2/3', col: '1/2' },
    { row: '3/4', col: '1/2' },
  ],
});

export const GraphListTemplates = Object.freeze({
  Desktop: '50% 1fr 1fr',
  Tablet: '60% 1fr 1fr',
  Mobile: '135px 1fr',
});

export const GraphListCells = Object.freeze({
  Mobile: [
    { row: '1/2', col: '1/3' },
    { row: '2/3', col: '2/3' },
    { row: '3/4', col: '2/3' },
    { row: '2/3', col: '1/2' },
    { row: '3/4', col: '1/2' },
  ],
});
