import Icon from '@/components/icon/Icon';
import classNames from 'classnames';
import { on } from 'events';

const Button: React.FC<{
  children: React.ReactNode;
  onCLick?: () => void;
  isOpened?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({ onCLick, isOpened, children, type = 'button' }) => {
  return (
    <button
      onClick={onCLick}
      className={classNames(
        isOpened ? 'bg-white' : '',
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
