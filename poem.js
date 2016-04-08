function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a maintainer on github</p>",
"<p onClick=nextLine(2)>So many pull requests she did snub</p>",
"<p onClick=nextLine(3)>So I forked the repo</p>",
"<p onClick=nextLine(4)>Now they all send <em>me</em> changes, d'oh!</p>",
"<p onClick=nextLine(5)>Said the maintainer, 'Welcome to the club!'</p>",
"<p onClick=nextLine(6)>Then Chris showed up</p>",
"<p onClick=nextLine(7)>And fucked with all the code</p>",
"<p onClick=nextLine(8)><img src='meme.jpg' style='margin-top:-70px;'>");
	document.getElementById("line").innerHTML=poem[line];
}

