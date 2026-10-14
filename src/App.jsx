import React, { useState } from 'react';

function App() {
  const [items,setItems] = useState([
    { id: 1,name: 'T-shirt', price: 300, qty: 1 },
    { id: 2,name: 'Jeans', price: 1200, qty: 1 },
    { id: 3,name: 'Sneakers', price: 2500, qty: 0 }
  ]);
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const GST_PERCENT = 18;

  function updateQty(id, qty) {
    setItems(prev => prev.map(it => it.id === id ? { ...it, qty: Math.max(0, qty) } : it));
  }

  function removeItem(id) {
    setItems(prev => prev.filter(it => it.id !== id));
  }

  function addSampleItem() {
    const nextId = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;
    setItems(prev => [...prev, { id: nextId, name: `New item ${nextId}`, price: 499, qty: 1 }]);
  }

  function subtotal() {
    return items.reduce((s, it) => s + it.price * it.qty, 0);
  }

  function calculateDiscount(sub) {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.type === 'percent') return Math.round(sub * (appliedCoupon.value / 100));
    if (appliedCoupon.type === 'fixed') return Math.min(appliedCoupon.value, sub);
    return 0;
  }

  function applyCoupon() {
    const code = (coupon || '').trim().toUpperCase();
    if (!code) return setAppliedCoupon(null);
    if (code === 'SAVE10') {
      setAppliedCoupon({ code, type: 'percent', value: 10 });
    } else if (code === 'SAVE20') {
      setAppliedCoupon({ code, type: 'percent', value: 20 });
    } else if (code === 'FLAT50') {
      setAppliedCoupon({ code, type: 'fixed', value: 50 });
    } else if (code === 'FREESHIP') {
      setAppliedCoupon({ code, type: 'fixed', value: 0 });
    } else {
      setAppliedCoupon({ code: null });
    }
  }

  function gstAmount(amountAfterDiscount) {
    return Math.round(amountAfterDiscount * (GST_PERCENT / 100));
  }
<li>
<>
<h1>Shopping Cart</h1>
<input type ={id}>placeholder = "Enter id" , required </input>
<input type ={item}>placeholder = "Enter Product"</input>
<input type = {price}> placeholder = "Enter Price"</input>
<input type = {qty}>placeholder = "Enter updateQty"</input>
<search itemID = {number}>placeholder="Enter productid"</search>
<button>Item added </button>
</>
</li>
}
export default App;