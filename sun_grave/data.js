const modifierTypes = {
	custom: 0,
	choose: 1,
	preset: 2
};

const races = [
	{
		name: "Custom Race",
		races: [
			{
				modType: modifierTypes.custom,
				name: "Custom",
				link: ""
			}
		]
	},
	{
		name: "Starter Races",
		races: [
			{
				modType: modifierTypes.preset,
				mods: [1,1,1,1,1,1],
				name: "Human",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
			{
				modType: modifierTypes.choose,
				mods: null,
				name: "Variant Human",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,2,0,0,1,0],
				name: "Goblin",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
			{
				modType: modifierTypes.preset,
				mods: [0,0,1,0,2,0],
				name: "Kobold",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
			{
				modType: modifierTypes.choose,
				mods: null,
				name: "Small-Folk",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
			{
				modType: modifierTypes.preset,
				mods: [1,0,2,0,0,0],
				name: "Beasthide Shifter",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
			{
				modType: modifierTypes.preset,
				mods: [2,1,0,0,0,0],
				name: "Longtooth Shifter",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
      {
				modType: modifierTypes.preset,
				mods: [0,2,0,0,0,1],
				name: "Swiftstride Shifter",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
      {
				modType: modifierTypes.preset,
				mods: [0,1,0,0,2,0],
				name: "Wildhunt Shifter",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			},
	{
				modType: modifierTypes.preset,
				mods: [0,1,0,0,0,2],
				name: "Feyling",
				link: "https://docs.google.com/document/d/1MqNoOkjSygbfTCKe6G-1aMe190fEsgs7pLHLBcOptnY/"
			}
		]
	}
];

const abilityAbbr = ["STR","DEX","CON","INT","WIS","CHA"];
