import Icon from '@/components/icon/Icon';
import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
	className?: string;
  onCLick?: () => void;
  isOpened?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ onCLick, isOpened, children, type = 'button' }) => {
  return (
    <button
      onClick={onCLick}
      className={classNames(
        isOpened ? 'bg-white text-black' : '',
        'flex grow cursor-pointer items-center justify-center space-x-[3px] px-[14px] uppercase hd:px-[20px]',
      )}
    >
      <span>{children}</span>
      <span className="h-[0.7em] w-[6.67px] hd:w-[10px]">
        <Icon name="arrowNav" />
      </span>
    </button>
  );
};

export default Button;
