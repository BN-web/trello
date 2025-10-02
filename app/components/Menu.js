import React from 'react'
import Link from 'next/link'

// component => Viet hoa chu cai dau
// con lai viet thuong

function Menu() {
    const menu = [
        { name: "Workplace", url: "/" },
        { name: "Recent", url: "/" },
    ]
    return (
        <div>
            <div class="flex">
                {menu.map(
                    ((item, index) => {
                        return <Link
                            key={index}
                            href={item.url}
                            className='p-4 text-2xl bg-blue-200'
                        >
                            {item.name}
                        </Link>
                    }
                    ))}
            </div>
        </div>
    )
}

<p> nhin gi</p>
export default Menu
