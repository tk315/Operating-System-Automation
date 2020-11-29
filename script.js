var robot=require('robotjs');//getting the variable of installed library
var fs=require('fs');
var screen =robot.getScreenSize();

setTimeout(openpaint,2000);//will call only once 

function openpaint()
{
    robot.moveMouseSmooth(0,screen.height);
    robot.mouseClick();
    setTimeout(() => {
        robot.typeString("paint");
        robot.keyTap("enter");
        setTimeout(writehi,2000);
    }, 2000);

}

function writehi()
{
    robot.moveMouseSmooth(407,330);
    robot.mouseToggle("down","left");
    robot.dragMouse(407,430);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(407,380);
    robot.mouseToggle("down","left");
    robot.dragMouse(450,380);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(450,330);
    robot.mouseToggle("down","left");
    robot.dragMouse(450,430);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(470,330);
    robot.mouseToggle("down","left");
    robot.dragMouse(520,330);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(495,330);
    robot.mouseToggle("down","left");
    robot.dragMouse(495,430);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(470,430);
    robot.mouseToggle("down","left");
    robot.dragMouse(520,430);
    robot.mouseToggle("up","left");

    setTimeout(openchrome,2000);
}

function openchrome()
{
    robot.moveMouseSmooth(0,screen.height);
    robot.mouseClick();
    setTimeout(() => {
        robot.typeString("chrome");
        robot.keyTap("enter");
        setTimeout(opentabs,2000);
    }, 2000);
}

function opentabs()
{
    var rdata=fs.readFileSync("./chrome.json");
    var tabs=JSON.parse(rdata);

    for(var i=0;i<tabs.length;i++)
    {
        for(var j=0;j<tabs[i].length;j++)
        {
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");
            if(j!=tabs[i].length-1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }
            else{
                if(i!=tabs.length-1)
                {
                    robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
                }
            }
        }

    }
    setTimeout(opennotepad, 2000);
}

function opennotepad()
{
    robot.moveMouseSmooth(0,screen.height);
    robot.mouseClick();
    setTimeout(() => {
        robot.typeString("notepad");
        robot.keyTap("enter")
        
    }, 2000);
    setTimeout(opencalculator, 2000);
}

function opencalculator()
{
    robot.moveMouseSmooth(0,screen.height);
    robot.mouseClick();
    setTimeout(() => {
        robot.typeString("calculator");
        robot.keyTap("enter");
    }, 2000);
   
}