import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
@Component({
    selector: 'app-course-List',
    templateUrl: './courselist.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];
    ngOnInit(): void {
        this.courses = [{
            id:1,
            name:'Angular : forms',
            imageUrl:'' ,
            price:99.99 ,
            code:'XPS-8796' ,
            duration:120 ,
            rating:5.4,
            releaseDate:'November,2,2019'
        },
        {
            id:1,
            name:'Angular : HTML',
            imageUrl:'' ,
            price:45.99 ,
            code:'LKL-1094' ,
            duration:80 ,
            rating:4,
            releaseDate:'December,4,2019'
        }]
    }

}