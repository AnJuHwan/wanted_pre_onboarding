import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import CenterContainer from '../CenterContainer/CenterContainer'

import styles from './Dropdown.module.css'

function Dropdown() {
  const dropdownItems: string[] = ['BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP']
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const [dropdownList, setDropdownList] = useState<string[]>(['All Symbols', ...dropdownItems])
  const [dropdownSelectItem, setDropdownSelectItem] = useState<string>('All Symbols')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdownHandler)
    return () => {
      document.addEventListener('mousedown', closeDropdownHandler)
    }
  }, [containerRef])

  const dropdownSelectItemHandler = (selectItem: string): void => {
    setDropdownSelectItem(selectItem)
    setOpenDropdown(false)
    setDropdownList(['All Symbols', ...dropdownItems])
  }

  const searchDropdownList = (searchItem: string): void => {
    const searchItemList = dropdownItems.filter((item) => item.toUpperCase().includes(searchItem.toUpperCase()))
    setDropdownList(['All Symbols', ...searchItemList])
  }

  const closeDropdownHandler = (event: MouseEvent): void => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpenDropdown(false)
      setDropdownList(['All Symbols', ...dropdownItems])
    }
  }

  return (
    <CenterContainer>
      <div className={styles.container} ref={containerRef}>
        <button type='submit' className={styles.dropdownBox} onClick={() => setOpenDropdown(!openDropdown)}>
          <span>{dropdownSelectItem}</span>
          <FontAwesomeIcon icon={faSortDown} />
        </button>
        {openDropdown && (
          <div className={styles.selectItemContainer}>
            <div className={styles.searchContainer}>
              <FontAwesomeIcon icon={faSearch} className={styles.sesarchIcon} />
              <input
                type='text'
                placeholder='Search Symbol'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchDropdownList(e.currentTarget.value)}
              />
            </div>
            <ul className={styles.selectItemBox}>
              {dropdownList.map((item, index) => {
                return (
                  <button
                    type='submit'
                    key={`selectItemBox${+index}`}
                    className={styles.listItem}
                    onClick={() => dropdownSelectItemHandler(item)}
                  >
                    {item}
                  </button>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </CenterContainer>
  )
}

export default Dropdown
