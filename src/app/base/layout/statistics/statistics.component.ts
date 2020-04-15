import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {
    SwiperComponent,
    SwiperDirective,
    SwiperConfigInterface,
    SwiperScrollbarInterface,
    SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

declare var $: any;

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss'],
    animations: [routerTransition()]
})
export class StatisticsComponent implements OnInit {

    public configurations: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        keyboard: true,
        mousewheel: true,
        scrollbar: false,
        navigation: true,
        pagination: false
    };
     public configurationsoffer: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 0,
    };

    public configurations2: SwiperConfigInterface = {
        slidesPerView: 5,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }
    };



    constructor() {
    }

    // barcharts chart
    public barchartsOptions: any = {
        responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: false,
                        text: 'Chart.js  Line Chart',
                    },
                    legend: {
                        display: false,
                        labels: {
                            fontColor: "#888888"
                        }
                    },
                    scales: {
                        yAxes: [{
                            display: false,
                            ticks: {
                                fontColor: "#888888",
                                beginAtZero: true,
                            },
                            gridLines: {
                                color: "rgba(160,160,160,0.1",
                                zeroLineColor: "rgba(160,160,160,0.15)"
                            }
                        }],
                        xAxes: [{
                            display: false,
                            ticks: {
                                fontColor: "#888888"
                            },
                            gridLines: {
                                color: "rgba(160,160,160,0.1)",
                                zeroLineColor: "rgba(160,160,160,0.15)"
                            }
                        }]
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    }
    };
    public barchartsLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'june', 'july'];
    public barchartsType: string;
    public barchartsLegend: boolean;

    public barchartsData: any[] = [{
        label: ' Used MB',
        backgroundColor: 'rgba(151, 94, 251, 0.3)',
        data: [65, 70, 60, 90, 75, 100, 130, 120, 150],
        borderColor: "rgba(151, 94, 251, 0.40)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderWidth: 2,
        borderDashOffset: 1,
        borderJoinStyle: 'bevel',
        pointBorderColor: "#ffffff",
        pointBackgroundColor: "#7b65f4",
        pointBorderWidth: 1,
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#000000",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 0,
        pointRadius: 2,
        pointHitRadius: 6,
    }];

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {}

    ngOnInit() {
        this.barchartsType = 'line';
    }

}
