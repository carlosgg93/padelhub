const SocialIcon = ({ label, path, svgPath }) => {
  const hoverColorVariants = {
    Facebook: 'hover:text-[#1877f2]',
    Twitter: 'hover:text-[#1da1f2]',
    Instagram: 'hover:text-[#e4405f]', // 'hover:text-[#f56040]
    LinkedIn: 'hover:text-[#0077b5]',
    GitHub: 'hover:text-[#181717]',
  };

  return (
    <a href={path}>
      <svg className={`w-6 fill-current text-primary-800 ${hoverColorVariants[label]}`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>{label}</title>
        <path d={svgPath} />
      </svg>
    </a>
  );
};

export default SocialIcon;
