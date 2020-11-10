/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-06 13:15:57
 * @modify date 2020-11-06 16:15:13
 * @desc [ Joi client side validation ]
 */

// joi validation
import reactJoiValidation from "react-joi-validation";
import Joi from "joi-browser";

reactJoiValidation.setJoi(Joi);
var schema = Joi.object().keys({
  name: Joi.string()
    .required()
    .label("Name")
    .error((errors) => {
      return {
        message: "Your name is required",
      };
    }),
  email: Joi.string()
    .required()
    .email()
    .min(5)
    .label("Email")
    .error((errors) => {
      return {
        message: "Email  is required",
      };
    }),
  subject: Joi.string()
    .required()
    .error((errors) => {
      return {
        message: "Subject is required ",
      };
    }),
  message: Joi.string()
    .required()
    .min(20)
    .error((errors) => {
      return {
        message: "Subject is required with min. 20 characters",
      };
    }),
});

const JoiValidation = () => {};
// validation option for JOI
var validationOptions = {
  joiSchema: schema,
  only: "user",
};

//export default JoiValidation(validationOptions);
export default reactJoiValidation(JoiValidation, validationOptions);
