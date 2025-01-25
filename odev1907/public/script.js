document.addEventListener('DOMContentLoaded', function() {
    // Chart.js'in yüklendiğinden emin olun
    if (typeof Chart === 'undefined') {
        console.error('Chart.js yüklenemedi!');
        return;
    }

    const fabricSelect = document.getElementById('fabricSelect');
    const salesForecastChartCtx = document.getElementById('salesForecastChart').getContext('2d');
    let salesForecastChart;

    // Grafik renkleri için ortak bir yapılandırma
    const chartColors = {
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)'
        ]
    };

    

    // Grafik oluşturma fonksiyonu
    function createChart(ctx, data, options) {
        try {
            return new Chart(ctx, {
                type: options.type || 'bar',
                data: {
                    labels: data.labels,
                    datasets: data.datasets
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Grafik oluşturulurken hata:', error);
        }
    }

    

    
    fetch('/api/lale-sales')
        .then(response => response.json())
        .then(data => {
            console.log('lale satışları:', data); // Gelen verileri konsolda kontrol edin

            // API'den gelen verileri etiketler ve veriler olarak ayır
            const labels = data.map(item => item.Mevsim);
            const salesData = data.map(item => item.Oran); // Oran (yüzde)
            const totalSalesData = data.map(item => item.ToplamSatış); // Toplam satış miktarı

            // Chart.js grafiği oluştur
            const ctx = document.getElementById('laleSalesChart').getContext('2d');
            const laleSalesChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Satış Oranı (%)',
                        data: salesData,
                        backgroundColor: [
                            '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e' // Farklı renkler
                        ],
                        borderColor: [
                            '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e' // Çerçeve renkleri
                        ],
                        borderWidth: 1
                    }],
                },
                options: {
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    const currentValue = tooltipItem.raw; // Oran (yüzde)
                                    const totalSales = totalSalesData[tooltipItem.dataIndex]; // Toplam satış miktarı
                                    return `Satış Oranı: ${currentValue}% - Toplam Satış: ${totalSales}`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true // Y eksenini sıfırdan başlat
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Veri alınırken hata oluştu:', error); // Hataları yakalayın ve yazdırın
        }); 

        

    

    // 
    fetch('/api/papatya-sales')
        .then(response => response.json())
        .then(data => {
            console.log('papatya satış:', data); // Gelen verileri konsolda kontrol edin

            // API'den gelen verileri etiketler ve veriler olarak ayır
            const labels = data.map(item => item.Mevsim);
            const salesData = data.map(item => item.Oran); // Oran (yüzde)
            const totalSalesData = data.map(item => item.ToplamSatış); // Toplam satış miktarı

            // Chart.js grafiği oluştur
            const ctx = document.getElementById('papatyaSalesChart').getContext('2d');
            const getPapatyaSalesSalesChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Satış Oranı (%)',
                        data: salesData,
                        backgroundColor: [
                            '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e' // Farklı renkler
                        ],
                        borderColor: [
                            '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e' // Çerçeve renkleri
                        ],
                        borderWidth: 1
                    }],
                },
                options: {
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    const currentValue = tooltipItem.raw; // Oran (yüzde)
                                    const totalSales = totalSalesData[tooltipItem.dataIndex]; // Toplam satış miktarı
                                    return `Satış Oranı: ${currentValue}% - Toplam Satış: ${totalSales}`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true // Y eksenini sıfırdan başlat
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Veri alınırken hata oluştu:', error); // Hataları yakalayın ve yazdırın
        });

    
    
    fetch('/api/nergiz-sales')
        .then(response => response.json())
        .then(data => {
            console.log('lale Oranları:', data); // Gelen verileri konsolda kontrol edin

            // API'den gelen verileri etiketler ve veriler olarak ayır
            const labels = data.map(item => item.Mevsim);
            const salesData = data.map(item => item.Oran); // Oran (yüzde)
            const totalSalesData = data.map(item => item.ToplamSatış); // Toplam satış miktarı

            // Chart.js grafiği oluştur
            const ctx = document.getElementById('açelyaSalesChart').getContext('2d');
            const açelyaSalesChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Satış Oranı (%)',
                        data: salesData,
                        backgroundColor: [
                            '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e' // Farklı renkler
                        ],
                        borderColor: [
                            '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e' // Çerçeve renkleri
                        ],
                        borderWidth: 1
                    }],
                },
                options: {
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    const currentValue = tooltipItem.raw; // Oran (yüzde)
                                    const totalSales = totalSalesData[tooltipItem.dataIndex]; // Toplam satış miktarı
                                    return `Satış Oranı: ${currentValue}% - Toplam Satış: ${totalSales}`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true // Y eksenini sıfırdan başlat
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Veri alınırken hata oluştu:', error); // Hataları yakalayın ve yazdırın
        });

    
    
    fetch('/api/papatya-sales')
    .then(response => response.json())
    .then(data => {
        console.log('papatya satış Oranları:', data); // Gelen verileri kontrol edin

        // API'den gelen verilerden etiketler ve satış bilgilerini ayrıştır
        const labels = data.map(item => item.Mevsim); // Mevsimler
        const salesData = data.map(item => item.Oran); // Oran (yüzde)
        const totalSalesData = data.map(item => item.ToplamSatış); // Toplam satış miktarı

        // Chart.js grafiği oluştur
        const ctx = document.getElementById('papatyaSalesChart').getContext('2d');
        const papatyaSalesChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Satış Oranı (%)',
                    data: salesData,
                    backgroundColor: [
                        '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e' // Çubuk renkleri
                    ],
                    borderColor: [
                        '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e' // Çerçeve renkleri
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                const currentValue = tooltipItem.raw; // Satış oranı (yüzde)
                                const totalSales = totalSalesData[tooltipItem.dataIndex]; // Toplam satış sayısı
                                return `Satış Oranı: ${currentValue}% - Toplam Satış: ${totalSales}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true // Y eksenini sıfırdan başlat
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Veri alınırken hata oluştu:', error); // Hataları yakalayın ve yazdırın
    });

    

    
    
            
             

    
    
});