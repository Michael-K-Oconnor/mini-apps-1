"use strict";

var LoginPage = function LoginPage(_ref) {
  var handleSubmit = _ref.handleSubmit,
      handleInputChange = _ref.handleInputChange,
      emailText = _ref.emailText,
      passwordText = _ref.passwordText;
  return React.createElement("form", {
    onSubmit: handleSubmit
  }, React.createElement("label", null, "EMAIL:", React.createElement("input", {
    type: "text",
    name: "email",
    value: emailText,
    onChange: handleInputChange
  })), React.createElement("label", null, "PASSWORD:", React.createElement("input", {
    type: "text",
    name: "password",
    value: passwordText,
    onChange: handleInputChange
  })), React.createElement("input", {
    type: "submit",
    value: "Submit"
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9sb2dpbnBhZ2UuanN4Il0sIm5hbWVzIjpbIkxvZ2luUGFnZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZW1haWxUZXh0IiwicGFzc3dvcmRUZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtFO0FBQUEsTUFBL0RDLFlBQStELFFBQS9EQSxZQUErRDtBQUFBLE1BQWpEQyxpQkFBaUQsUUFBakRBLGlCQUFpRDtBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ2xGLFNBQ0U7QUFBTSxJQUFBLFFBQVEsRUFBRUg7QUFBaEIsS0FDRSw2Q0FFRjtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsT0FBeEI7QUFBZ0MsSUFBQSxLQUFLLEVBQUVFLFNBQXZDO0FBQWtELElBQUEsUUFBUSxFQUFFRDtBQUE1RCxJQUZFLENBREYsRUFLRSxnREFFRjtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsVUFBeEI7QUFBbUMsSUFBQSxLQUFLLEVBQUVFLFlBQTFDO0FBQXdELElBQUEsUUFBUSxFQUFFRjtBQUFsRSxJQUZFLENBTEYsRUFTRTtBQUFPLElBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsSUFBQSxLQUFLLEVBQUM7QUFBM0IsSUFURixDQURGO0FBYUQsQ0FkRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExvZ2luUGFnZSA9ICh7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlSW5wdXRDaGFuZ2UsIGVtYWlsVGV4dCwgcGFzc3dvcmRUZXh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgRU1BSUw6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsVGV4dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgUEFTU1dPUkQ6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkVGV4dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgIDwvZm9ybT5cbiAgKVxufSJdfQ==