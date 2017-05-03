import AddTypeModule from './addType';
import AddTypeController from './addType.controller';
import AddTypeComponent from './addType.component';
import AddTypeTemplate from './addType.html';

describe('AddType', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AddTypeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AddTypeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AddTypeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AddTypeComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AddTypeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AddTypeController);
    });
  });
});
