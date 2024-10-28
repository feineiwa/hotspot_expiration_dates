const	userExpirations	= {
	"FANEVA" : "2024-12-01",
	"FANILO" : "2025-09-01",
}

function displayExpiration(username)
{
	const expElement = document.getElementById("exp");
	if (userExpirations[username])
	{
		expElement.innerHTML = `${userExpirations[username]}`;
	}
	else
	{
		expElement.innerHTML = "N/A";
	}
}