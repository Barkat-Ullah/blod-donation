const getStoredDonate = () => {
    const storedDonate = localStorage.getItem('donate-application')
    if(storedDonate){
        return JSON.parse(storedDonate)
    }
    return []
}



const saveDonates = id =>{
    const saveDonate = getStoredDonate();
    const exits = saveDonate.find(jobId => jobId === id)
    if(!exits){
        saveDonate.push(id);
        localStorage.setItem('donate-application', JSON.stringify(saveDonate))
        
    }
}
export {getStoredDonate ,saveDonates}