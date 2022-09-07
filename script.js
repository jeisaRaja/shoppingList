console.log('Hello!');
const modal = document.querySelector('.modal');
const float_button = document.querySelector('.float_button');
const modal_bg = document.querySelector('.modal_bg');
const form_submit_button = document.querySelector('.form_submit_button');
const form = document.querySelector('.form');
const list_item_div = document.querySelector('.list_item_div');
let status = true;
let list_barang = [];
float_button.addEventListener('click', (e) => {
  console.log(e);
  if (modal.style.display === 'flex') {
    hideModal();
    return;
  }

  showModal();
  return;
});

modal_bg.addEventListener('click', (e) => {
  hideModal();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  add_list(e);
});

const add_list = (e) => {
  const data = e.target;
  const nama_barang = data.nama_barang.value;
  const harga_barang = data.harga_barang.value;

  list_barang.push({
    nama_barang: nama_barang,
    harga_barang: harga_barang,
    date: new Date().toDateString(),
  });
  console.log(list_barang);
  data.nama_barang.value = '';
  data.harga_barang.value = '';
  hideModal();
  render_list();
};

const render_list = () => {
  list_item_div.innerHTML = '';
  list_barang.forEach((item, i) => {
    console.log(i);
    list_item_div.innerHTML += `
    <div class="card" id="${i}">
    <h3>${item.date}</h3>
    <div class="detail_item">${item.nama_barang} <span> Rp.${item.harga_barang} </span></div>
    <button onclick="handleDelete(${i})">Selesai</button>
  </div>`;
  });
};

function handleDelete(i) {
  console.log(i);
  list_barang.splice(i, 1);
  render_list();
}

const hideModal = () => {
  float_button.style.transform = 'rotate(0deg)';
  modal.style.display = 'none';
  float_button.style.backgroundColor = 'rgb(74, 74, 187)';
};

const showModal = () => {
  float_button.style.transform = 'rotate(45deg)';
  modal.style.display = 'flex';
  float_button.style.backgroundColor = 'rgb(168, 66, 66)';
};
