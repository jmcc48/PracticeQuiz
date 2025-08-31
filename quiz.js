// quiz.js
// Quiz logic for grading and showing solutions

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    // Hardcoded questions and answers
    const answers = {
        q1: '-1',
        q2: 'y = 2x/3 + 5/3',
        q3: '-3/2',
        q4: '3',
        q5: '2'
    };
    const solutions = {
        q1: 'The slope between (2,2) and (4,0) is <strong>-1</strong>.',
        q2: 'The equation of the line through (2,3) and (-1,1) is <strong>y = 2x/3 + 5/3</strong>.',
        q3: 'The y-intercept of the line y = 3x - 3/2 is <strong>-3/2</strong>.',
        q4: 'The slope of the line y = 3x + 1 is <strong>3</strong>.',
        q5: 'The x-intercept of the line y = 2x - 4 is <strong>2</strong>.'
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let score = 0;
        let total = 5;
        // Hide previous solutions if any
        document.getElementById('solution-q1').style.display = 'none';
        document.getElementById('solution-q1').innerHTML = '';
        document.getElementById('solution-q2').style.display = 'none';
        document.getElementById('solution-q2').innerHTML = '';
        document.getElementById('solution-q3').style.display = 'none';
        document.getElementById('solution-q3').innerHTML = '';
        document.getElementById('solution-q4').style.display = 'none';
        document.getElementById('solution-q4').innerHTML = '';
        document.getElementById('solution-q5').style.display = 'none';
        document.getElementById('solution-q5').innerHTML = '';
        // Question 1 grading
        const userAnswer1 = form.q1.value;
        let feedback1 = '';
        if (userAnswer1 === answers.q1) {
            score++;
            feedback1 = '<span style="color: #1a7f37;">Correct!</span> ';
        } else {
            feedback1 = '<span style="color: #d32f2f;">Incorrect.</span> ';
        }
        const solutionDiv1 = document.getElementById('solution-q1');
        solutionDiv1.innerHTML = feedback1 + solutions.q1;
        solutionDiv1.style.display = 'block';
        // Question 2 grading
        const userAnswer2 = form.q2.value;
        let feedback2 = '';
        if (userAnswer2 === answers.q2) {
            score++;
            feedback2 = '<span style="color: #1a7f37;">Correct!</span> ';
        } else {
            feedback2 = '<span style="color: #d32f2f;">Incorrect.</span> ';
        }
        const solutionDiv2 = document.getElementById('solution-q2');
        solutionDiv2.innerHTML = feedback2 + solutions.q2;
        solutionDiv2.style.display = 'block';
        // Question 3 grading
        const userAnswer3 = form.q3.value;
        let feedback3 = '';
        if (userAnswer3 === answers.q3) {
            score++;
            feedback3 = '<span style="color: #1a7f37;">Correct!</span> ';
        } else {
            feedback3 = '<span style="color: #d32f2f;">Incorrect.</span> ';
        }
        const solutionDiv3 = document.getElementById('solution-q3');
        solutionDiv3.innerHTML = feedback3 + solutions.q3;
        solutionDiv3.style.display = 'block';
        // Question 4 grading
        const userAnswer4 = form.q4.value;
        let feedback4 = '';
        if (userAnswer4 === answers.q4) {
            score++;
            feedback4 = '<span style="color: #1a7f37;">Correct!</span> ';
        } else {
            feedback4 = '<span style="color: #d32f2f;">Incorrect.</span> ';
        }
        const solutionDiv4 = document.getElementById('solution-q4');
        solutionDiv4.innerHTML = feedback4 + solutions.q4;
        solutionDiv4.style.display = 'block';
        // Question 5 grading
        const userAnswer5 = form.q5.value;
        let feedback5 = '';
        if (userAnswer5 === answers.q5) {
            score++;
            feedback5 = '<span style="color: #1a7f37;">Correct!</span> ';
        } else {
            feedback5 = '<span style="color: #d32f2f;">Incorrect.</span> ';
        }
        const solutionDiv5 = document.getElementById('solution-q5');
        solutionDiv5.innerHTML = feedback5 + solutions.q5;
        solutionDiv5.style.display = 'block';
        // Show score at the bottom
        resultDiv.innerHTML = `<strong>Your score: ${score} / ${total}</strong>`;
        resultDiv.style.display = 'block';
    });
    // Plot the line y = 2x - 4
    const x5 = [-2, 0, 2, 4];
    const y5 = x5.map(xi => 2*xi - 4);
    Plotly.newPlot('plot5', [{
        x: x5,
        y: y5,
        mode: 'lines',
        line: {color: '#007bff', width: 3},
        hoverinfo: 'none',
        showlegend: false
    }], {
        margin: { t: 10, b: 40, l: 40, r: 10 },
        xaxis: { title: 'x', zeroline: true },
        yaxis: { title: 'y', zeroline: true },
        width: 400,
        height: 300
    }, {displayModeBar: false});
    // Plot the line y = 3x + 1
    const x4 = [-2, 0, 1, 2];
    const y4 = x4.map(xi => 3*xi + 1);
    Plotly.newPlot('plot4', [{
        x: x4,
        y: y4,
        mode: 'lines',
        line: {color: '#007bff', width: 3},
        hoverinfo: 'none',
        showlegend: false
    }], {
        margin: { t: 10, b: 40, l: 40, r: 10 },
        xaxis: { title: 'x', zeroline: true },
        yaxis: { title: 'y', zeroline: true },
        width: 400,
        height: 300
    }, {displayModeBar: false});
    // Plot the line y = 3x - 3/2
    const x3 = [-2, 0, 1, 2];
    const y3 = x3.map(xi => 3*xi - 1.5);
    Plotly.newPlot('plot3', [{
        x: x3,
        y: y3,
        mode: 'lines',
        line: {color: '#007bff', width: 3},
        hoverinfo: 'none',
        showlegend: false
    }], {
        margin: { t: 10, b: 40, l: 40, r: 10 },
        xaxis: { title: 'x', zeroline: true },
        yaxis: { title: 'y', zeroline: true },
        width: 400,
        height: 300
    }, {displayModeBar: false});
    // Plot two points: (2,3) and (-1,1)
    Plotly.newPlot('plot2', [
        {
            x: [2, -1],
            y: [3, 1],
            mode: 'markers',
            marker: {color: '#007bff', size: 10},
            hoverinfo: 'none',
            showlegend: false
        }
    ], {
        margin: { t: 10, b: 40, l: 40, r: 10 },
        xaxis: { title: 'x', zeroline: true },
        yaxis: { title: 'y', zeroline: true },
        width: 400,
        height: 300
    }, {displayModeBar: false});
    // Plot two points: (2,2) and (4,0)
    Plotly.newPlot('plot1', [
        {
            x: [2, 4],
            y: [2, 0],
            mode: 'markers',
            marker: {color: '#007bff', size: 10},
            hoverinfo: 'none',
            showlegend: false
        }
    ], {
        margin: { t: 10, b: 40, l: 40, r: 10 },
        xaxis: { title: 'x', zeroline: true },
        yaxis: { title: 'y', zeroline: true },
        width: 400,
        height: 300
    }, {displayModeBar: false});
});
