import people1 from './people1';
import people2 from './people2';

export default class MyService {

  getAllPeople = async () => {
    return [...people1.people1, ...people2.people2];
  };
}
