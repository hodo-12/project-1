// 1. 투자 데이터 시각화 (Chart.js)
const rawData = [
    {date: '2026-02-23', inst: -1365589, indiv: 2368275, foreign: -1179826},
    {date: '2026-02-20', inst: 903343, indiv: -345127, foreign: -712880},
    {date: '2026-02-19', inst: 1394876, indiv: -683740, foreign: -872276},
    {date: '2026-02-13', inst: -998369, indiv: 1792993, foreign: -940583},
    {date: '2026-02-12', inst: 1044122, indiv: -4303988, foreign: 3159894},
    {date: '2026-02-11', inst: 389912, indiv: -1472360, foreign: 905526},
    {date: '2026-02-10', inst: 119710, indiv: -467377, foreign: 159554},
    {date: '2026-02-09', inst: 3027332, indiv: -3689198, foreign: 501395},
    {date: '2026-02-06', inst: 509044, indiv: 2440797, foreign: -3162705},
    {date: '2026-02-05', inst: -3425569, indiv: 8154850, foreign: -5073670},
    {date: '2026-02-04', inst: 1170169, indiv: -351578, foreign: -993770},
    {date: '2026-02-03', inst: 2070462, indiv: -2885178, foreign: 745376},
    {date: '2026-02-02', inst: -2889940, indiv: 5268908, foreign: -2489186},
    {date: '2026-01-30', inst: -2328055, indiv: 4083588, foreign: -1949628},
    {date: '2026-01-29', inst: -1993751, indiv: 3371592, foreign: -1500385},
    {date: '2026-01-28', inst: -3489468, indiv: 3262219, foreign: 369282},
    {date: '2026-01-27', inst: -899916, indiv: -23147, foreign: 925220},
    {date: '2026-01-26', inst: -3414882, indiv: 3554502, foreign: -163296},
    {date: '2026-01-23', inst: -81202, indiv: -217022, foreign: 172239}
].reverse(); // 날짜 순서대로 정렬

const ctx = document.getElementById('investorChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: rawData.map(d => d.date),
        datasets: [
            { label: '기관', data: rawData.map(d => d.inst), backgroundColor: '#ff7272' },
            { label: '개인', data: rawData.map(d => d.indiv), backgroundColor: '#fbc400' },
            { label: '외국인', data: rawData.map(d => d.foreign), backgroundColor: '#4a90e2' }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                stacked: false,
                title: { display: true, text: '매수/매도 거래량' }
            }
        },
        plugins: {
            tooltip: { mode: 'index', intersect: false }
        }
    }
});

// 2. 로또 추첨기 로직
document.getElementById('generate-btn').addEventListener('click', function() {
    const numbers = [];
    while(numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if(!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.sort((a, b) => a - b);
    
    const ballContainer = document.getElementById('lotto-numbers');
    ballContainer.innerHTML = '';
    
    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.textContent = num;
        
        if (num <= 10) ball.style.backgroundColor = '#fbc400';
        else if (num <= 20) ball.style.backgroundColor = '#69c8f2';
        else if (num <= 30) ball.style.backgroundColor = '#ff7272';
        else if (num <= 40) ball.style.backgroundColor = '#aaa';
        else ball.style.backgroundColor = '#b0d840';
        
        ballContainer.appendChild(ball);
        ball.style.animation = `bounce 0.5s ease ${index * 0.1}s`;
    });
});
