// import * as User from '../model';
// import events from '../../../services/events';

// const crypto = require('crypto');

// const resetPasswordLink = async ({ email }) => {
//   const user = await User.findUserByEmail(email);
//   if (!user) return;

//   const buffer = crypto.randomBytes(32);
//   const token = buffer.toString('hex');

//   const { resetPasswordToken } = await User.updateResetPasswordToken({
//     token,
//     userId: user.id,
//   });

//   events.emit(events.types.USER.RESET_PASSWORD, {
//     resetToken: resetPasswordToken,
//     firstInitial: user.firstName,
//     email,
//   });
// };

// export default resetPasswordLink;
