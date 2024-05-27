let loans = {
    hipotecario: 0,
    automotriz: 0,
    consumo: 0
  };
  
  function guardar() {
    let loanType = document.getElementById("loanType").value;
    loans[loanType]++;
  }
  
  function mostrar() {
    let summary = `Hipotecarios: ${loans.hipotecario}\n
                   Automotriz: ${loans.automotriz}\n
                   Consumo: ${loans.consumo}`;
    
    alert(summary);
  }