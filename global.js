var subs = {
	"Leopard": "Leopard",
	"Keyboards": "Leopards",
	"My butt": "My butt",
	"Butt": "Butt",
	"Interbutt": "Interbutt",
	"These dudes I know": "These dudes I know",
	"Kinda probably": "Kinda probably",
	"Tumblr post": "Tumblr post",
	"Avenge": "Avenge",
	"Spaaace": "Spaaace",
	"Virtual Boy": "Virtual Boy",
	"Pokédex": "Pokédex",
	"Atomic": "Atomic",
	"Elf-lord": "Elf-lord",
	"Rivendell": "Rivendell",
	"Cat": "Cat",
	"Eating contest": "Eating contest",
	"river spirits": "river spirits",
	"Homestar runner": "Homestar runner",
	"Is guilty": "Is guilty",
	"is guilty for comment": "Is guilty and everyone knows it",
	"an Informed source": "My friend Alan",
	"Programming": "Masturbating",
	"Programmer": "Masturbator",
	"Program": "Masturbate",
	"Script": "Wank",
	"Scripter": "Wanker",
	"Webdev": "Wanker",
	"Web developer": "Wanker",
	"Scripting": "Wanking",
	"Wank": "Script",
	"Masturbating": "Programming",
	"Masturbator": "Programmer",
	"Wanker": "Webdev",
	"Masturbate": "Program",
	"Wanking": "Scripting",
	"Continued": "Refused to stfu",
	"Economist": "Grand mystic",
	"Penis": "Willy",
	"Microsoft": "Microderp",
	"Windows": "Vindos",
	"Apple": "Crapple",
	"Commit": "Orgasm",
	"Walk": "Bounce",
	"Walked": "Bounced",
	"Scared": "Spook",
	"Penis": "Penisn't",
	"IDE": "Tribal homeland",
	"Its": "Her",
	"Project": "Girlfriend"
	
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
		v = v.replace(new RegExp("("+i+")"), subs[i]);
		v = v.replace(new RegExp("("+i+")", "gi"), subs[i].toLowerCase());
	}

	textNode.nodeValue = v;
}
