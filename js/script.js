const blocks = document.querySelectorAll('.section'),
  arrows = document.querySelectorAll('.section-arrow'),
  body = document.querySelector('body');

arrows.forEach((item, i) => {
    item.addEventListener('click', () => {
        let children = blocks[i].children;
        if (blocks[i].classList.contains('collapsed')) {
            blocks[i].classList.toggle('collapsed');
            setTimeout(() => {
                for (let j = 1; j < children.length; j++) {
                  children[j].classList.toggle('d-none');
                }
            }, 100);
        } else {
            for (let j = 1; j < children.length; j++) {
              children[j].classList.toggle('d-none');
            }
            setTimeout(() => {
              blocks[i].classList.toggle('collapsed');
            }, 100);
        }
    });
});

//modal window
function showAlert() {
  Swal.fire({
    title: 'Dodaj pole',
    width: '581px',
    imageUrl: './icons/close.svg',
    html: `
      <div class="modal-wrap">
        <div>
          <h2 class="modal-subtitle">Zmiany danych pola 1:</h2>
          <div class="modal-radio">
            <div class="modal-radio-item">
              <input class="form-check-input" type="radio" id="optionYes" name="dataChange1" value="yes" checked>
              <label for="optionYes">Tak</label>
            </div>
            <div class="modal-radio-item">
              <input class="form-check-input" type="radio" id="optionYes" name="dataChange1" value="yes">
              <label for="optionYes">Nie</label>
            </div>
          </div>
        </div>
        <div>
          <h2 class="modal-subtitle">Zmiany danych pola 2:</h2>
          <div class="modal-checkbox">
            <div class="modal-checkbox-items">
              <div class="modal-checkbox-items-item">
                <input class="form-check-input" type="checkbox" id="unchecked1" value="unchecked1">
                <label for="unchecked1">Unchecked 1</label>
              </div>
              <div class="modal-checkbox-items-item">
                <input class="form-check-input" type="checkbox" id="unchecked2" value="unchecked2">
                <label for="unchecked2">Unchecked 2</label>
              </div>
            </div>
            <div class="modal-checkbox-items">
              <div class="modal-checkbox-items-item">
                <input class="form-check-input" type="checkbox" id="checkbox1" value="checked1" checked>
                <label for="checkbox1">Checked 1</label>
              </div>
              <div class="modal-checkbox-items-item">
                <input class="form-check-input" type="checkbox" id="checkbox2" value="checked2" checked>
                <label for="checkbox2">Checked 2</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    showCancelButton: true,
    cancelButtonText: 'Anuluj',
    confirmButtonText: 'Zapisz',
    customClass: {
      title: 'modal-title',
      cancelButton: 'btn-grey',
      confirmButton: 'btn-blue',
      actions: 'modal-actions'
    },
    preConfirm: () => {
      const selectedOption1 = document.querySelector('input[name="dataChange1"]:checked').value;
      const checkedBoxes = [
        document.getElementById('checkbox1').checked,
        document.getElementById('checkbox2').checked,
        document.getElementById('unchecked1').checked,
        document.getElementById('unchecked2').checked
      ];
  
      return {
        selectedOption1,
        checkedBoxes
      };
    },
    reverseButtons: true 
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Zapisano!');
    }
  });

  const closeIcon = document.querySelector('.swal2-image');
    closeIcon.addEventListener('click', () => {
      Swal.close();
    });
}

//table
const checkboxes = document.querySelectorAll(".form-check-input-table");
checkboxes[0].addEventListener("click", () => {
  if (checkboxes[0].checked){
    checkboxes.forEach(item => item.checked = true);
  } else {
    checkboxes.forEach(item => item.checked = false);
  }
});

const pluses = document.querySelectorAll(".inform-detailed_list-item-more"),
  minuses = document.querySelectorAll(".details-content-item-minus"),
  detailsItems = document.querySelectorAll(".details-row"),
  items = document.querySelectorAll(".inform-detailed_list-item"),
  mainCheckboxes = document.querySelectorAll(".form-check-input-main"),
  detailsChackboxes = document.querySelectorAll(".details-content-checkbox");

mainCheckboxes.forEach((item, i) => {
  detailsChackboxes[i].checked = item.checked;
  item.addEventListener("click", () => {
    detailsChackboxes[i].checked = item.checked;
  });
});
detailsChackboxes.forEach((item, i) => {
  mainCheckboxes[i].checked = item.checked;
  item.addEventListener("click", () => {
    mainCheckboxes[i].checked = item.checked;
  });
});

pluses.forEach((item, i) => {
  item.addEventListener("click", () => {
    items[i].classList.add("d-none");
    detailsItems[i].classList.remove("d-none");
  });
});

minuses.forEach((item, i) => {
  item.addEventListener("click", () => {
    items[i].classList.remove("d-none");
    detailsItems[i].classList.add("d-none");
  });
});