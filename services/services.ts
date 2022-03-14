import { Injectable, Injector } from './injection';

/**
 * CRUD Service for CRUD operations against BE / DB
 */
@Injectable()
class CrudService {
  getData(entity: string) {
    return `Some Data from -> ${entity}`;
  }
}

/**
 * Service to retrieve/crate/update comments
 */
@Injectable()
class CommentsService {
  constructor(public crudService: CrudService) {}

  getComments() {
    return this.crudService.getData('/comments');
  }
}

/**
 * Service to retrieve/crate/update comments
 */
@Injectable()
export class MoviesService {
  constructor(
    private commentsService: CommentsService,
    private crudService: CrudService
  ) {}
  getMovies() {
    return this.crudService.getData('/movies');
  }

  private testMethod() {}

  getComments() {
    return this.commentsService.getComments();
  }
}

/**
 * Simple usage of injector
 */
const movies = Injector.resolve<MoviesService>(MoviesService);

console.log(movies.getComments());
console.log(movies.getMovies());

/**
 * Stubing classes for unit testing
 */
class CrudServiceStub {
  getData(entity: string) {
    return `Some Data from STUB-> ${entity}`;
  }
}

const testMovies = Injector.resolve<MoviesService>(MoviesService, [
  {
    provide: CrudService,
    useClass: CrudServiceStub,
  },
]);

console.log(testMovies.getComments());
console.log(testMovies.getMovies());
