 const cardGen = (name,age,stuclass,subjects)=>{
    let sub = ``;
    subjects.forEach((ele)=> {
        sub+=`<p>${ele}</p>`
    })
   return(
    `<main class="main">
    <div class="card">
        <div class="name"> 
            <h1>${name}</h1>
             <div class="infor">
                <p>age is : ${age}</p>
                <p> class is :${stuclass}</p>
    
             </div> 
             <h3>subjects </h3>
             <div class="subjects">
                ${sub}
             </div>   
    </div>
    </div>
</main>`
   )
}
export default cardGen;
