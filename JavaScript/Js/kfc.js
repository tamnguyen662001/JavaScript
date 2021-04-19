const items = [
    {
        name:'CHEESEBURGER',
        price:3,
        quantity:0
    },
    {
        name:'CHICKEN SANDWICH',
        price:1,
        quantity:0
    },
    {
        name:'CHICKEN TENDERS',
        price:4,
        quantity:0
    }
]

const shipping = 22

function update(index,quantity){
    if(quantity<1){
        return
    }
    items[index].quantity =quantity;
    render();
}


function remove(index){
    items.splice(index, 1)
    render();
}


var food = ['Pizza Italia', 'Burger | Specials  ','Spagetty', 'BBQ','Lemon-juice','Pepsi','Sprise','Burger Italia', 'Chicken KFC', 'CocaCola']
// var food = ['Pizza Italia', 'Burger ','Spagetty', 'BBQ ','BBQ','Spagetty2','Spagetty']
function add(){
    items.push({
        // name:'Chicken' + 1+Math.round( Math.random()*(5 - 1)), 
        name: food[Math.floor(Math.random() * 10)].toUpperCase(),                                                                                   
        price:(Math.random()).toFixed(2)*10,
        quantity:1
    })
    render();
}

function render(){
    let subTotal = 0;
    items.forEach(item=>{
        subTotal += item.quantity * item.price
    })
    const total  = subTotal + shipping;

    const html = items.map(item=>
    `<li class="order-item">
    <div class="order-item-content">
        <div class="name">${item.name}</div>

        <div class="quantity">
            <button class="dec">-</button>
            <input type="number" class="quantity" value="${item.quantity}">
            <button class="inc">+</button>
        </div>

        <div class="price">
            <span>$${(item.price*item.quantity).toFixed(2)}</span>
            <button class="delete">x</i></button>
        </div>
    </div>
    </li>`).join('')
   



        document.getElementById('orders').innerHTML = html


        const btndelete = [ ...document.getElementsByClassName('delete')]
        const btndec =[ ...document.getElementsByClassName('dec')]
        const btninc = [ ...document.getElementsByClassName('inc')]
        for (let i = 0; i < btndelete.length; i++) {
            btndec[i].addEventListener('click', ()=>{
                update(i,items[i].quantity-1)
            })
            btninc[i].addEventListener('click', ()=>{
                update(i,items[i].quantity+1)
            })
            btndelete[i].addEventListener('click', ()=>{
                remove(i);
            })   
        }

        document.getElementById('sub-total').innerText ='$'+subTotal.toFixed(2).toString()
        document.getElementById('ship').innerText ='$'+shipping.toString()
        document.getElementById('total').innerText ='$'+total.toFixed(2).toString()
        // $('#total').innerText = '$${total.toFixed(2)}'
}

// render();


document.getElementById('btn-addfood').addEventListener('click', ()=>{
    add()
})
// a = document.getElementsByClassName('btn-checkout')
//     // alert('Infomation of your bill')
//     a.onclick=function(){
//         alert('gdjhsgjads')
//     }

render();



var btn1 = document.getElementById('btn-check');
btn1.addEventListener('click', ()=>{

});
// render();


