const fs = require("fs")
const filePath = "data.json";


const readData  = ()=>{
    try{
         const data  = fs.readFileSync(filePath,"utf-8");
         return JSON.parse(data)
    }catch(err){
         console.log("Error readng file", err);
         return []
    }
}
const writeData = (data)=>{
 try {
    fs.writeFileSync(filePath,JSON.stringify(data));
    console.log("Data written Successfully")
 } catch (error) {
    console.log("Error readng file", err);
    
 }
}

const createItems = (item)=>{
    const data = readData();
    item.id = Date.now();
    data.push(item);
    writeData(data)
    console.log("Item added" ,item)
}
const readItems = ()=>{
    const data = readData()
    console.log("All items are :" , data)
}

const updateItem =(id,newData)=>{
  var data  = readData();
 data = data.map((item) => (item.id === id ? {...item,...newData}:item))
 writeData(data);
 console.log("updated successfully")
}

const deleteItem = (id)=>{
    const data = readData()
   const newdata = data.filter((item) => item.id !== id);
   if(newdata.length === data.length){
    console.log("Item not found")
   } else {
    writeData(newdata);
    console.log("Item deleted")
   }
} 

// createItems({name:"ITEM1",description:"This is item1"});
// createItems({name:"ITEM2",description:"This is item2"});
// readItems()
// updateItem(1738390357283,{name:"Adfar Rasheed"})
deleteItem(1738390444314)