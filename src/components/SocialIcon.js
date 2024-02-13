const SocialIcon = ({ label, color, path, svgPath }) => (
  <a href={path}>
    <svg className="w-6 fill-current text-primary-800 hover:text-[#1877F2]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>{label}</title>
      <path d={svgPath} />
    </svg>
  </a>
);

export default SocialIcon;
