let prom = new Promise(function(resolve,reject){
    var request = new XMLHttpRequest();
    request.open('GET','https://restcountries.eu/rest/v2/all',true);
    request.send();
    request.onload = function() {
        resolve(JSON.parse(this.response))
    }
    request.onerror = function() {
        reject('error')
    }
})
prom.then((data)=>{
    countrycards(data)
}).catch((err)=>{console.log(err)})

    function countrycards(data){
    var container = document.createElement('div')
    container.classList.add('container','p-4')
    container.setAttribute('style','background-color: rgb(197, 197, 248);')
    var k=0; 
    for(var i=0;i<data.length;i++){
        var row = document.createElement('div')
        row.setAttribute('class','row')
        for(var j=0;j<4;j++)
        {
            var column = document.createElement('div')
            column.setAttribute('class','col-3')
            var card = document.createElement('div')
            card.setAttribute('class','card')
            card.setAttribute('style','width:15rem')
            var h5 = document.createElement('h5')
            h5.setAttribute('class','card-title')
            h5.setAttribute('style','text-align:center;')
            h5.setAttribute('id','title')
            h5.innerHTML = data[k].name
            var img = document.createElement('div')
            img.setAttribute('id','img')
            var flag = data[k].flag
            img.innerHTML = `<img src = ${flag} width = 230px height = 120px>`
            var p1 = document.createElement('p')
            p1.setAttribute('style','text-align:center;')
            var span1 = document.createElement('span')
            span1.innerHTML = "Capital: "
            var span2 = document.createElement('span')
            span2.setAttribute('class','badge badge-success')
            span2.innerHTML = data[k].capital
            p1.append(span1,span2)
            var p2 = document.createElement('p')
            p2.setAttribute('style','text-align:center;')
            var span1 = document.createElement('span')
            span1.innerHTML = "Country Code: "
            var span2 = document.createElement('span')
            span2.innerHTML = data[k].alpha3Code
            p2.append(span1,span2)
            var p3 = document.createElement('p')
            p3.setAttribute('style','text-align:center;')
            var span1 = document.createElement('span')
            span1.innerHTML = "Region: "
            var span2 = document.createElement('span')
            span2.innerHTML = data[k].region
            p3.append(span1,span2)
            var p4 = document.createElement('p')
            p4.setAttribute('style','text-align:center;')
            var span1 = document.createElement('span')
            span1.innerHTML = "LatLong: "
            var span2 = document.createElement('span')
            span2.innerHTML = data[k].latlng
            p4.append(span1,span2)
            card.append(h5,img,p1,p2,p3,p4)
            column.append(card)
            row.append(column)
            container.append(row)
            document.body.append(container)
            k++
        }
    }
}