import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import CenterContainer from '../CenterContainer/CenterContainer';
import styles from './Dropdown.module.css';

const Dropdown = () => {
  const dropdownItems: string[] = [
    'All Symbols',
    'BTCUSD.PERP',
    'ETHUSD.PERP',
    'BCHUSD.PERP',
    'LTCUSD.PERP',
    'XRPUSD.PERP',
  ];
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [dropdownList, setDropdownList] = useState<string[]>(dropdownItems);
  const [dropdownSelectItem, setDropdownSelectItem] = useState<string>(dropdownItems[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const dropdownSelectItemHandler = (selectItem: string) => {
    setDropdownSelectItem(selectItem);
    setOpenDropdown(false);
    setDropdownList(dropdownItems);
  };

  const searchDropdownList = (searchItem: string) => {
    const searchItemList = dropdownItems.filter((item) =>
      item.toUpperCase().includes(searchItem.toUpperCase()),
    );
    setDropdownList(searchItemList);
  };

  const closeDropdownHandler = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpenDropdown(false);
      setDropdownList(dropdownItems);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdownHandler);
    return () => {
      document.addEventListener('mousedown', closeDropdownHandler);
    };
  }, [containerRef]);

  return (
    <CenterContainer>
      <div className={styles.container}>
        <div className={styles.dropdownBox} onClick={() => setOpenDropdown(!openDropdown)}>
          <span>{dropdownSelectItem}</span>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        {openDropdown && (
          <div className={styles.selectItemContainer} ref={containerRef}>
            <div className={styles.searchContainer}>
              <FontAwesomeIcon icon={faSearch} className={styles.sesarchIcon} />
              <input
                type='text'
                placeholder='Search Symbol'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  searchDropdownList(e.currentTarget.value)
                }
              />
            </div>
            <ul className={styles.selectItemBox}>
              {dropdownList.map((item, index) => (
                <li
                  key={index}
                  className={styles.listItem}
                  onClick={() => dropdownSelectItemHandler(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </CenterContainer>
  );
};

export default Dropdown;
