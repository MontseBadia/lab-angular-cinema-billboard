import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie: Object;
  id: Number;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    activatedRoute.params.subscribe((params) => {
      this.id = Number(params.id);
    });
    this.movie = this.moviesService.getMovie(this.id);
  }

  ngOnInit() { // Should the previous code go in here?
  }

}
