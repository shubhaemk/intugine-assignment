export const getSortedData = data => (
    new Promise((resolve,reject) => {
        if(data.length){
            const delData = data.filter( item => item.current_status_code === 'DEL');
            const intData = data.filter( item => item.current_status_code === 'INT');
            const oodData = data.filter( item => item.current_status_code === 'OOD');
            const nfiData = data.filter( item => item.current_status_code === 'NFI');
            const dexData = data.filter( item => item.current_status_code === 'DEX');
            resolve({
                delData,
                intData,
                oodData,
                nfiData,
                dexData
            })
        }else{
            reject({
                error : "data not recieved"
            })
        }
    })
);