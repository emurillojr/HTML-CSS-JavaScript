

var pics=new Array();
pics[0]="images/fire1.jpg";
pics[1]="images/water1.jpg";
pics[2]="images/grass1.jpg";

//highlight images below

var pics2=new Array();
pics2[0]="images/fire2.jpg";
pics2[1]="images/water2.jpg";
pics2[2]="images/grass2.jpg";

//comp save preference

var pId=new Array("rock_p","paper_p","scissors_p");


var cId=new Array("rock_c","paper_c","scissors_c");


function swap(id,image)
{
	document.getElementById(id).src=image;
	
}



//fuction to swap

function play(id)
{
	swap(pId[0],pics[0]);
	swap(pId[1],pics[1]);
	swap(pId[2],pics[2]);
	
	swap(cId[0],pics[0]);
	swap(cId[1],pics[1]);
	swap(cId[2],pics[2]);

	//stores player choice
	
	var p_choice=id;
	
	//stores player choice
	
	var c_choice=id;
	
	//math.floor to round the choices
	var c_choice=Math.floor(Math.random()*2.9);
	swap(pId[p_choice],pics2[p_choice]);
	swap(cId[c_choice],pics2[c_choice]);
	
	//determines who wins loses
	
	switch(p_choice)
	{
	case 0:
		if(c_choice ==0)
		{
			alert("Draw!!!");		
		} 
		else if (c_choice == 1)
			{
			alert("You LOSE!! Water beats Fire!");
			}
		else
			{
			alert ("You WIN!!! Fire beats Grass!");
			}
		break;		
		
	case 1:
			if(c_choice ==1)
		{
			alert("Draw!!!");		
		} 
		else if (c_choice == 2)
			{
			alert("You LOSE!  Grass beats Water!");
			}
		else
			{
			alert ("You WIN!!! Water beats Fire!");
			}
		break;	
		
	case 2:
			if(c_choice ==2)
		{
			alert("Draw!!!");		
		} 
		else if (c_choice == 1)
			{
			alert("You WIN!!! Grass beats Water!");
			}
		else
			{
			alert ("You LOSE! Fire beats Grass!");
			}
		break;	
	
		
	}
}	//ends play function