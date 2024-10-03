const taskLogger=(taskName,isComplete)=>{
    if (isComplete=true)  {   
         console.log(`Task "${taskName}" is completed.`);
    }
    else(isComplete=false) => {
        console.log(`Task "${taskName}" is not completed yet.`);

    }
};
taskLogger("Finish Homework", true);
taskLogger("Clean Room", false);
taskLogger("Go for a Run", true);
taskLogger("Read Book", false);