const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Famale', 'Male'],
        datasets: [{
            label: '# of Votes',
            data: [19, 12],
            borderWidth: 1,
            color:['#fff']
            
        }]
    },
    
});

const ctxs = document.getElementById('myChartd');

new Chart(ctxs, {
    type: 'bar',
    data: {
        labels: ['Elephant', 'Horse', 'Tiger', 'Lion', 'Jaguar'],
        datasets: [{
            label: 'Animals Count',
            data: [19, 12, 20, 23, 17],
            borderWidth: 1,
            backgroundColor: [ 'green', 'aqua', 'yellow', 'blue', 'gray'],
            color:'#fff'
            
        }]
    },
    options: {
        indexAxis: 'y',
        
    }
});