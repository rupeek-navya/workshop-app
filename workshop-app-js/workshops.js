(function(){
    const workshopList=document.querySelector('#workshop-list')
    const fetchMessage = document.querySelector( '#div-id' );
    function fetchWorkshop(){
        return axios.get('https://workshops-server.herokuapp.com/workshops')
        .then((response)=>{
            return response.data
        })
        .catch((error)=>{
            return error.message
        })
    }
    function addMethod(workshop){
        workshopList.innerHTML+=`<li class="col">
<div class="card my-3">
<img src=${workshop.imageUrl} class="img-fluid"/>
<h2>${workshop.name}</h2>
<div>
 <small>
     <span class="date">${workshop.startDate}</span> - <span class="date">${workshop.endDate}</span>
 </small>
</div>
<div>
 <small>${workshop.time}</small>    
</div>
<div class="my-3">
 <span>${workshop.location.address}</span>,
 <span>${workshop.location.city}</span>,
 <span>${workshop.location.state}</span>
</div>
<div>
 <p>${workshop.description}</div>
</div>
</li>`
    }
    function addWorkshop(workshops){
        workshops.forEach(workshop=>addMethod(workshop))
    }
    function showFetchMessage(message,theme){
        fetchMessage.innerHTML=message
        fetchMessage.style.display='block'
        fetchMessage.className=`message message-${theme}`
    }
    function hideFetchMessage(){
        fetchMessage.style.display='none'
    }
    function init(){
        showFetchMessage( 'Loading workshops', 'info' );
        fetchWorkshop()
        .then((workshops)=>{
            hideFetchMessage()
            addWorkshop(workshops)
        })
        .catch((error)=>{
            showFetchMessage(error.message,'error')
        })
    }
    init()
}())