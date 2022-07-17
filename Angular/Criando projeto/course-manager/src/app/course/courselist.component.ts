import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";
@Component({
    selector: 'app-course-List',
    templateUrl: './courselist.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    constructor (private courseService:CourseService ){ }
        
    
    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll()
    }

}