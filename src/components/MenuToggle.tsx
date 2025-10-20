import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

type MenuToggleProps = {
  links: string[];
};

export default function MenuToggle({ links }: MenuToggleProps) {
  return (
    <Popover>
      {({ open: isOpened, close }) => (
        <>
          <PopoverButton
            aria-expanded={isOpened}
            className="relative size-8 z-20 grid place-items-center"
          >
            {isOpened ? (
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                  fill="#FFF"
                  fillRule="evenodd"
                />
              </svg>
            ) : (
              <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                </g>
              </svg>
            )}
          </PopoverButton>

          <PopoverPanel className="fixed z-10 inset-0 px-6 md:px-20 bg-black">
            <div className="flex flex-col gap-6 mt-56">
              {links.map((link) => (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    close();
                  }}
                  className="font-heading font-light text-2xl leading-none uppercase"
                >
                  {link}
                </a>
              ))}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
