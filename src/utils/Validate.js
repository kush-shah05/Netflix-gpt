const Validate = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email id is invalid";
  if (!isPasswordValid) return "Password is invalid";

  return null;
};

export default Validate;

//  {\href{ProjectLink.com}{\textbf{\large{\underline{NetflixGPT- AI enabled movie suggestion app}}} \href{https://netflix-gpt-delta-neon.vercel.app/browse}{\raisebox{-0.1\height}\faExternalLink }} $|$ \large{\underline{ReactJS, Redux, Tailwind, Firebase, OpenAI, TMDB}}}{}
//https://www.overleaf.com/project/66005ee829102b86e98970bc