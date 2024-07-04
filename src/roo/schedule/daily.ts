import { ScheduleTime } from '.';

export enum Daily {
	DimensionDrill,
	DuoBattleOfYggdrasil,
	ExtremeChallenge,
	EmperiumOverrun,
	FinalTrialOfNerdiness,
	PhantomHunt,
	GuildFeast,
	GuildQuiz,
	GuildVault,
	InitialTrialOfNerdiness,
	MoonlitArena,
	TheGuildLeague,
	ThemedParty,
	TimeSpaceAbnormality,
	TetraRealms,
	WarOfEmperium,
	WeekendBanquet,
}

export const getDailies = (date: Date): Daily[] => {
	const day = date.getDay() as Day;

	switch (day) {
		case 0:
			// sunday
			return [Daily.DuoBattleOfYggdrasil, Daily.MoonlitArena, Daily.ThemedParty, Daily.WarOfEmperium, Daily.EmperiumOverrun];

		case 1:
			// monday
			return [Daily.ExtremeChallenge, Daily.GuildQuiz, Daily.DimensionDrill, Daily.GuildVault];

		case 2:
			// tuesday
			return [Daily.GuildFeast, Daily.TimeSpaceAbnormality, Daily.TheGuildLeague];

		case 3:
			// wednesday
			return [Daily.GuildQuiz, Daily.DimensionDrill];

		case 4:
			// thursday
			return [Daily.GuildFeast, Daily.PhantomHunt, Daily.TheGuildLeague];

		case 5:
			// friday
			return [Daily.GuildQuiz, Daily.GuildVault];

		case 6:
			// saturday
			return [Daily.InitialTrialOfNerdiness, Daily.DuoBattleOfYggdrasil, Daily.MoonlitArena, Daily.FinalTrialOfNerdiness, Daily.WeekendBanquet, Daily.TetraRealms, Daily.TheGuildLeague];
	}
};

export const getDailyDuration = (value: Daily): Duration => {
	switch (value) {
		case Daily.DimensionDrill:
			return { minutes: 40 };

		case Daily.GuildVault:
			return { hours: 2, minutes: 30 };

		case Daily.MoonlitArena:
			return { hours: 11, minutes: 59 };

		case Daily.InitialTrialOfNerdiness:
			return { hours: 13 };

		case Daily.FinalTrialOfNerdiness:
			return { minutes: 20 };

		case Daily.DuoBattleOfYggdrasil:
			return { hours: 14 };

		case Daily.PhantomHunt:
		case Daily.GuildFeast:
		case Daily.WeekendBanquet:
			return { minutes: 20 };

		case Daily.GuildQuiz:
		case Daily.TetraRealms:
			return { minutes: 15 };
			
		case Daily.ExtremeChallenge:
			return { hours: 23, minutes: 59 };

		case Daily.TheGuildLeague:
			return { minutes: 25 };

		case Daily.ThemedParty:
			return { minutes: 30 };

		case Daily.TimeSpaceAbnormality:
			return { minutes: 13 };

		case Daily.WarOfEmperium:
		case Daily.EmperiumOverrun:
			return { hours: 1, minutes: 10 };
	}
};

export const getDailyTime = (value: Daily): ScheduleTime => {
	switch (value) {
		case Daily.ExtremeChallenge:
			return { hours: 0, minutes: 0 };

		case Daily.FinalTrialOfNerdiness:
			return { hours: 19, minutes: 0 };

		case Daily.InitialTrialOfNerdiness:
			return { hours: 5, minutes: 0 };

		case Daily.DuoBattleOfYggdrasil:
			return { hours: 10, minutes: 0 };

		case Daily.MoonlitArena:
			return { hours: 12, minutes: 0 };

		case Daily.GuildFeast:
		case Daily.GuildQuiz:
		case Daily.ThemedParty:
		case Daily.WeekendBanquet:
			return { hours: 20, minutes: 0 };

		case Daily.DimensionDrill:
		case Daily.PhantomHunt:
		case Daily.TimeSpaceAbnormality:
		case Daily.TetraRealms:
			return { hours: 20, minutes: 30 };

		case Daily.TheGuildLeague:
			return { hours: 20, minutes: 55 };

		case Daily.GuildVault:
			return { hours: 21, minutes: 20 };

		case Daily.WarOfEmperium:
		case Daily.EmperiumOverrun:
			return { hours: 20, minutes: 50 };
	}
};
