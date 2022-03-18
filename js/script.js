function productsCard() {
      fetch('db.json')
          .then((res) => {
              return res.json();
          })
          .then((data) =>{
              data.forEach((item)=> {
                  const wrapper = document.querySelector('.wrapper');
                  const container = document.createElement('div');
                        container.classList.add('container')
                  const productCard = document.createElement('div');
                  productCard.classList.add('productCard')
                  const productImg = document.createElement('img')
                  productImg.src = item.img
                  productImg.classList.add('productImg')
                  const productPrice = document.createElement('p')
                  productPrice.innerText = item.price + ' сом'
                  productPrice.classList.add('productPrice')
                  const productTitle = document.createElement('h3');
                  productTitle.innerText = item.title
                  productTitle.classList.add('productTitle')
                  const productDesc = document.createElement('p');
                  productDesc.innerText = item.desc
                  productDesc.classList.add('productDesc')
               
                  wrapper.append(container)
                  container.append(productCard)
                  productCard.append(productImg);
                  productCard.append(productTitle);
                  productCard.append(productPrice)
                  productCard.append(productDesc);
                    
              })
          })
  
      }
      productsCard()