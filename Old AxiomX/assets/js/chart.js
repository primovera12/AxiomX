document.addEventListener('DOMContentLoaded', function() {

    // --- Data Matching the Screenshot ---
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Reject',
                data: [6000, 21500, 6500, 9000, 16500, 35000, 10000, 27000, 7500, 6500, 11500, 19000], 
                backgroundColor: '#d4fb50', // Dark Green
                barPercentage: 0.7,
                categoryPercentage: 0.8,
                borderRadius: {
                    topLeft: 50, // 30px radius for top-left
                    topRight: 50  // 30px radius for top-right
                }
            },
            {
                label: 'Completed',
                data: [15500, 7500, 13000, 4000, 27500, 7000, 22000, 16000, 2500, 29000, 21500, 4500],
                backgroundColor: '#19342c', // Light Yellow/Green
                barPercentage: 0.7,
                categoryPercentage: 0.8,
                borderRadius: {
                    topLeft: 50, // 30px radius for top-left
                    topRight: 50  // 30px radius for top-right
                }
            }
        ]
    };

    // --- Plugin for the Custom "36.000" Label ---
    const customDataLabel = {
        id: 'customDataLabel',
        afterDraw(chart, args, options) {
            const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
            
            // Find the index of the bar you want to highlight (June is index 5)
            const index = 5; 
            const datasetIndex = 0; // Completed dataset

            // Check if the dataset and data point exists
            if (chart.data.datasets[datasetIndex] && chart.data.datasets[datasetIndex].data[index]) {
                const value = chart.data.datasets[datasetIndex].data[index]; // 35000
                const meta = chart.getDatasetMeta(datasetIndex);
                
                // Get the coordinates of the June 'Completed' bar
                const barElement = meta.data[index];
                
                // Calculate the position for the label
                const xPos = barElement.x;
                const yPos = barElement.y;
                
                // Draw the rounded green box
                ctx.fillStyle = '#519b66'; // Highlight Green
                ctx.strokeStyle = '#519b66';
                ctx.lineWidth = 1;
                ctx.font = '700 15px Inter'; 
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Text to display
                const labelText = '36.000'; // Using the value from the screenshot
                const padding = 8;
                const textWidth = ctx.measureText(labelText).width;
                const boxWidth = textWidth + padding * 4;
                const boxHeight = 30;
                const borderRadius = 6;
                const offset = 10; // Distance above the bar

                // Draw the box (rounded rectangle)
                ctx.beginPath();
                ctx.moveTo(xPos + borderRadius - boxWidth / 2, yPos - offset - boxHeight / 2);
                ctx.lineTo(xPos + boxWidth / 2 - borderRadius, yPos - offset - boxHeight / 2);
                ctx.quadraticCurveTo(xPos + boxWidth / 2, yPos - offset - boxHeight / 2, xPos + boxWidth / 2, yPos - offset - boxHeight / 2 + borderRadius);
                ctx.lineTo(xPos + boxWidth / 2, yPos - offset + boxHeight / 2 - borderRadius);
                ctx.quadraticCurveTo(xPos + boxWidth / 2, yPos - offset + boxHeight / 2, xPos + boxWidth / 2 - borderRadius, yPos - offset + boxHeight / 2);
                ctx.lineTo(xPos - boxWidth / 2 + borderRadius, yPos - offset + boxHeight / 2);
                ctx.quadraticCurveTo(xPos - boxWidth / 2, yPos - offset + boxHeight / 2, xPos - boxWidth / 2, yPos - offset + boxHeight / 2 - borderRadius);
                ctx.lineTo(xPos - boxWidth / 2, yPos - offset - boxHeight / 2 + borderRadius);
                ctx.quadraticCurveTo(xPos - boxWidth / 2, yPos - offset - boxHeight / 2, xPos - boxWidth / 2 + borderRadius, yPos - offset - boxHeight / 2);
                ctx.closePath();
                ctx.fill();

                // Draw the text
                ctx.fillStyle = '#fff'; // White text
                ctx.fillText(labelText, xPos, yPos - offset);
            }
        }
    };


    // --- Chart Configuration ---
    const config = {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: false, // Custom legend in HTML/CSS
                },
                tooltip: {
                    // Custom tooltip formatting (Optional, you can disable this if the custom label is enough)
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { 
                                    minimumFractionDigits: 0 
                                }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 50000, 
                    ticks: {
                        stepSize: 10000,
                        // Format Y-axis labels like 50.000
                        callback: function(value, index, values) {
                            return new Intl.NumberFormat('en-US', { 
                                minimumFractionDigits: 0 
                            }).format(value);
                        },
                        color: '#b6b6b6',
                        padding: 10,
                        font: {
                            size: 14
                        },
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)', // Light horizontal grid lines
                    }
                },
                x: {
                    grid: {
                        display: false // No vertical grid lines
                    },
                    ticks: {
                        color: '#b6b6b6',
                        font: {
                            size: 14
                        },
                    },
                }
            }
        },
        plugins: [customDataLabel]
    };

    // Initialize the chart
    const shipmentChart = new Chart(
        document.getElementById('shipmentBarChart'),
        config
    );
});