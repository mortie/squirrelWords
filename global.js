var subs = {
	"Keyboard": "Leopard",
	"The Cloud": "My Butt",
	"Cloud": "Butt",
	"Internet": "Interbutt",
	"Witnesses": "These dudes I know",
	"Witness": "This dude I know",
	"Allegedly": "Kinda probably",
	"New study": "Tumblr post",
	"Rebuild": "Avenge",
	"Space": "Spaaace",
	"Google Glasses": "Virtual Boys",
	"Google Glass": "Virtual Boy",
	"Smartphone": "Pokédex",
	"Electric": "Atomic",
	"Senator": "Elf-lord",
	"Senate": "Rivendell",
	"Car": "Cat",
	"Election": "Eating Contest",
	"Congressional Leaders": "River Spirits",
	"Homeland Security": "Homestar Runner",
	"Microsoft": "Derpsoft",
	"Apple": "Pear",
	"OS X": "Hipsterware",
	"iOS": "Hipsterware Lite",
	"Congressional leaders": "River spirits",
	"Homeland Security": "Homestar Runner",
	"Could not be reached": "Is guilty",
	"Could not be reached for comment": "Is guilty and everyone knows it",
	"An informed source": "My friend Alan",
	"Informed sources": "My buddies",
	"Source": "Alan",
	"Programming": "Masturbating",
	"Programmer": "Masturbator",
	"Program": "Masturbate",
	"Script": "Wank",
	"Scripter": "Wanker",
	"Webdev": "Wanker",
	"Web developer": "Wanker",
	"Scripting": "Wanking",
	"Continued": "Refused to stfu",
	"Economist": "Grand mystic",
	"Penis": "Willy",
	"Windows": "Vindos",
	"God": "Snorlax",
	"Distributed": "Disturbed",
	"Disturbed": "Distributed",
	"Distribution": "Distrubation",
	"Disturbation": "Distribution",
	"Distribute": "Disturb",
	"Disturb": "Distribute",
	"Cancel": "Nvm",
	"Next": "Moar",
	"Previous": "Moar",
	"More": "Moar",
	"Fork": "Spoon",
	"Wrap": "Attack",
	"Question": "Questchin",
	"Comment": "Complaint",
	"Report": "Fuck",
	"GNU": "Hipster",
	"Git": "Pot",
	"Gist": "Weed",
	"Watch": "Molest",
	"Less": "tl;dr",
	"Delete": "Eat",
	"Commit": "Orgasm",
	"Walk": "Bounce",
	"Walked": "Bounced",
	"Scared": "Spook",
	"Penis": "Willy",
	"Its": "Her",
	"Project": "Girlfriend",
	"Porn": "Pleeeeasure",
	"Website": "Wobsite",
	"Blog": "Blag",
	"Airpont": "Airpart",
	"Mega": "Biggy",
	"Children": "Younglings",
	"Child": "Youngling"
}

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			substitute(node);
			break;
	}
}

function substitute(textNode)  {
	var v = textNode.nodeValue;
	for (i in subs) {
		v = v.replace(new RegExp("(\\s"+i+")"), " "+subs[i]);
		v = v.replace(new RegExp("("+i+"\\s)"), subs[i]+" ");
		
		v = v.replace(new RegExp("(\\s"+i+")", "gi"), " "+subs[i].toLowerCase());
		v = v.replace(new RegExp("("+i+"\\s)", "gi"), subs[i].toLowerCase()+" ");

		if (v.toLowerCase == subs[i].toLowerCase) {
			v = v.replace(new RegExp("("+i+")"), subs[i]);
			v = v.replace(new RegExp("("+i+")", "gi"), subs[i].toLowerCase());
		}
	}

	textNode.nodeValue = v;
}
