import React from 'react'
import NavBar from '../../NavBar'
import CodeBlock from '../../CodeBlock'
import titleImg from '../../../assets/virtual-machine-title-img.png'
import vbImg from '../../../assets/virtualbox-img.png'
import vbDownloads from '../../../assets/virtualbox-download-os.png'
import vbInstall from '../../../assets/virtualbox-install.png'
import vbSecurity from '../../../assets/virtualbox-security-error.png'
import vbDescription from '../../../assets/OS-describe.png'
import vbMemory from '../../../assets/memory-allocation.png'
import vbMainScreen from '../../../assets/virtualbox-mainscreen.png'
import vbHardDisk from '../../../assets/HardDisk-options.png'
import vbDisplay from '../../../assets/display-tab.png'
import vbCPU from '../../../assets/set-cpu.png'
import vbSystem from '../../../assets/system-tab.png'
import vbStorage from '../../../assets/storage-tab.png'
import './VM.css'
export default function VM() {
    return (
        <div>
            <NavBar/>
            <div className="post-container">
                <div className="post-inner">
                    <div className="content">
                        <h3 className="post-title">How to Create a<br/> Virtual Machine Using Virtual Box</h3>
                        <h2 className="post-subtitle">What is a virtual machine?</h2>
                        
                        <p>
                            A virtual machine is basically a computer inside a computer. 
                            This computer uses a portion of your system's resources such as the CPU power, memory, ram etc. 
                            Kind of like if you were to host a guest. Except, this guest thinks they are the host.
                            The host is your computer, and the guest is the virtual machine.
                            The host provides the resources and the guest may freely use the resources provided. 
                            And you as the host, can throw out this guest whenever you want and bring in as many more guests as you want.
                            Just make sure you have the resources or… I guess you can't host them.
                        </p>
                        <br/>
                        <hr/>
                        <h2 className="post-subtitle">Why do you need it?</h2>
                       
                        <p>
                            - <strong>A chance to use those old computers lying around in your house</strong> : Say you've got a very old, outdated computer. For example, a mac which is so old it no longer supports the new macOS updates. You can install Linux on your VM and use the machine however you like. 
                            <br/>
                            <br/>
                            - <strong>Ability to try new operating systems</strong> : Say you’ve used macOS, and only macOS for your entire life. You’ve heard about windows and want to give the features a try. Well, with a virtual machine, you don’t have to buy a Windows computer. Instead you can simply install the Windows 10 ISO.
                            <br/>
                            <br/>
                            - <strong>Run old programs no longer compatible with your current OS version</strong> : You’ve dug through some old code of yours and need to run it for whatever purpose. Sadly, your current operating system no longer supports some snippets in your code. No worries, simply install the latest version of the OS onto Virtual Box (explained later in the post)
                            <br/>
                            <br/>
                            - <strong>Resource and cost efficiency</strong> : If a business would like to deploy several apps, they can do so by investing in many more servers. Or, they can use a single server which has many VMs. These VMs can each run an application. 
                            Money saved? Check! Time saved? Check!
                            <br/>
                            <br/>
                            - <strong>Security</strong> : By using your main OS/host you are very vulnerable to several attacks such as sketchy email attachments, installing fake flash malware etc. But a VM is entirely isolated from the host making it extremely difficult for dangerous malware to affect your hardware. If your VM does happen to get infected, you can simply revert back to previous states. 
                        </p>
                        
                        <br/>
                        <hr/>
                        <h2 className="post-subtitle">What is VirtualBox?</h2>
                        
                        <input className="virtualbox-img" type="image" src={vbImg}/>
                        
                        <p>
                            In order for the average joe to set up a VM, virtual machine software is necessary for a smooth setup.
                            <br/>
                            <br/>
                            There are many of these programs so to list a couple.
                            <br/>
                            <br/>
                            <li><a className="link" href="https://www.zones.com/site/statics/static_page.html?name=partner/vmware/personal-desktop/workstation-player" target="_blank">VMware</a></li>
                            <li>VirtualBox</li>
                            <li><a className="link" href="https://searchvirtualdesktop.techtarget.com/definition/Parallels">Parallels Desktop</a></li>
                            <li><a className="link" href="https://docs.citrix.com/en-us/citrix-hypervisor/technical-overview.html">Citrix Hypervisor</a></li>
                            <br/>
                            For this example we will be using VirtualBox an open source program from Oracle. It acts as a <a className="link" href="https://www.vmware.com/topics/glossary/content/hypervisor">hypervisor</a>, creating a virtual machine where a user can run a separate OS. 
                            VirtualBox will run on your host OS which can be macOS, Linux or Windows Solaris and OpenSolaris. It also supports plenty of <a className="link" href="https://en.wikipedia.org/wiki/VirtualBox#:~:text=VirtualBox%20may,%5B8%5D">guest operating systems</a>. When creating your VM with VirtualBox, you will be able to allocate a specific amount of <a className="link" href="https://www.crucial.com/articles/about-memory/support-what-does-computer-memory-do">RAM</a>, <a className="link" href="https://www.computerhope.com/jargon/d/diskcapa.htm">Disk Space</a> and <a className="link" href="https://www.hp.com/us-en/shop/tech-takes/cpu-cores-how-many-do-i-need">CPU Cores</a>.
                            You may also pause your VM when running, shut it down and start it back up. 
                        </p>

                        <br/>
                        <hr/>

                        <h2 className="post-subtitle">How to setup VirtualBox? - full walkthrough</h2>
                        
                        <p>
                            <h3> Download & Install VirtualBox</h3>
                            <br/>

                            Start by clicking on this link -> <a className="link" target="_blank" href="https://www.virtualbox.org/wiki/Downloads#:~:text=VirtualBox%206.1.26%20platform%20packages">VirtualBox Download</a>
                            <br/>
                            Download your host's operating system
                            <br/>

                            <input width="80%" className="vb-img" type="image" src={vbDownloads}/>
                            
                            <br/>
                            Once that is finished downloading, find the location of the file and open it up.
                            Next, you will see a window with four different options. Double click on the VirtualBox.pkg
                            <br/>

                            <input width="80%" className="vb-img" type="image" src={vbInstall}/>

                            <br/>
                            Now you should see a welcoming window, you can press continue here.
                            The rest is pretty intuitive so I won't go over any of that.
                            <br/>

                            <br/>
                            If you run into a problem during the installation, it may be due to your mac blocking your installation (Most likely a identification error). 
                            To fix this problem, open up your system preferences. Click on "Security & Privacy" and the General tab. 
                            You may see
                            <br/>

                            <br/>
                            <figure class="quote">
                                <blockquote>
                                &#8220; system software from developer was blocked from loading &#8221;
                                </blockquote>
                            </figure>
                            <br/>
                            Simply click allow and give it another go.
                            
                            <br/>
                            <input width="80%" className="vb-img" type="image" src={vbSecurity}/>
                            <br/>

                            <h3>Download Guest</h3>

                            <br/>
                            Now that we have VirtualBox installed, we need to invite a guest. 
                            I am currently running macOS but would like to run linux for many reasons. In order to do this we can install the latest version of ubuntu LTS (long term support)
                            <br/>

                            <br/>
                            <a className="link" href="https://ubuntu.com/download/desktop#:~:text=ubuntu%2020.04.2.0%20lts"> Download </a>
                            <br/>
                            
                            <br/>
                            The extension of this file is an <a className="link" href="https://fileinfo.com/extension/iso">ISO</a>, so if you wanted to download a windows operating system. You'd want to get a windows 10 ISO file.
                            Store the file in a safe place where you can easily access it.
                            <br/>
                            
                            <h3>Setup Virtual Machine</h3>

                            Go ahead and open up the Virtual Box app. 
                            At the top of the window, you will see a couple of options. 
                            
                            <br/>
                            <br/>
                            <li>New (cmd-n) : Create a new virtual machine</li>
                            <li>Settings (cmd-s) : Change your selected VM's settings</li>
                            <li>Discard : Discard machines saved state</li>
                            <li>Start : Start up your VM</li>
                            <br/>

                            <input width="90%" className="vb-img" type="image" src={vbMainScreen}/>

                            <br/>
                            In order to create our VM click on the Blue Star like button (New).
                            A new window will appear prompting you for the VM's name,
                            where the VM will be stored, the type and version.
                            <br/>

                            <input width="85%" className="vb-img" type="image" src={vbDescription}/>

                            <br/>
                            Enter a descriptive name so the type and version fields to be autocompleted.
                            For example, since we want to be running a VM on Ubuntu, we can type 
                            <br/>

                            <br/>
                            <figure class="quote" style={{width:"26%"}}>
                                <blockquote>
                                &#8220; Ubuntu 20.04 &#8221;
                                </blockquote>
                            </figure>
                            <br/>

                            Change the type and version accordingly if it did not auto complete

                            <li>Type: linux</li>
                            <li>Version Ubuntu (64-bit) or (32-bit)</li>

                            <br/>
                            The following windows explained are all optional, and you may change the amount of RAM, CPU and DISK SPACE to best suit your needs.
                            <br/>

                            <br/>
                            <h3>Memory Size</h3>

                            <input width="85%" className="vb-img" type="image" src={vbMemory}/>

                            <br/>
                            The ratio of MB to GB is 1000:1 <br/>
                            This window will allow you to allocate a certain amount of RAM to your virtual machine. 
                            Virtual Box recommends around 1 GB of RAM, though i'd say that is quite low. 
                            For a machine with a total of 8 GB I recommend inserting 2000-4000 MB's. 
                            And for a machine with 16 GB I recommend 6000-4000 GB of RAM. 

                            Don't worry, if you see that your VM is not running as smoothly as you like.
                            You can easily go back to the Virtual Machine's setting and change this amount.
                            <br/>
                            <br/>
                            <h3>Hard Disk Options</h3>

                            <input width="85%" className="vb-img" type="image" src={vbHardDisk}/>
                            
                            <br/>
                            This window will prompt you with three options.
                            <br/>

                            1) Do not add a virtual hard disk <br/>
                            2) Create a virtual hard disk now <br/>
                            3) Use an existing virtual hard disk file <br/>
                            I suggest creating a new virtual hard disk
                            <br/>

                            <br/>
                            <h3>Hard Disk File Type</h3>
                            <br/>

                            click VDI (VirtualBox Disk Image)

                            <br/>
                            <br/>
                            <h3>Storage on Physical Hard Disk</h3>
                            <br/>

                            Here you have two options. You can either choose a dynamically allocated hard disk or a set it to a fix sized.

                            Well what's the difference.<br/> A fixed hard disk file will automatically take 50 GB of space from your device.
                            On the other hand, a dynamically allocated hard disk will display the assigned units of space, but will only grow to use only as much space as it actually needs.
                            For example, if you have allocated 50 GB, and have only used up 1GB, it'll only use 1gb on your storage device.
                            
                            <br/>
                            Because of this reason, a dynamically allocated hard disk would be the way to go. Take a look <a className="link" href="https://biztechmagazine.com/article/2012/09/how-choose-right-virtual-disk-format">here</a> for a more information on this.
                            
                            <br/>
                            <br/>
                            <h3>File Location and Size</h3>
                            <br/>
                            Here is where you can give your virtual disk a storage size. This cannot be changed so make sure you give it enough space. <br/><br/>
                            Virtual Box Recommendation: 8GB<br/>
                            Personal Recommendation: 20-50GB;
                            <br/>
                            <br/>
                            <hr/>
                        </p>
                        <p>
                            <h2 className="post-subtitle">Change Virtual Machine's Settings</h2>
                            GREAT! You've created your first virtual machine. Now we just need to change some settings. 
                            <br/>
                            <br/>
                            <h3>System Tab</h3>
                            <br/>
                            <input type="image" className="vb-img" width="85%" src={vbSystem}/>
                            <br/>
                            The first thing we need to change is the amount of RAM your VM can use. We can do this by clicking on the Settings button. Clicking on the top System tab at the top and adjusting the Base Memory slider.
                            Normally I set this to 5 or 8 GB of RAM because I have 16 total GB of RAM. But this is really up to you and can be changed. Last thing on this section would be to uncheck the floppy disk.
                            <br/>
                            <input type="image" className="vb-img" width="85%" src={vbCPU}/>
                            <br/>
                            Another thing that could be changed is your processor. Virtual Box sets your CPU count to 1 which is good enough for the average user, but it wont hurt to change it.
                            <br/>
                            <br/>
                            <h3>Display Tab</h3>
                            <input type="image" className="vb-img" width="85%" src={vbDisplay}/>
                            <br/>
                            Two things to change here. You want to enable 3D Acceleration and set the Video Memory to max. 
                            These are all the important things needed to be changed, the rest can be customized for your preference.
                            <br/>
                            <br/>
                            <h3>Storage Tab</h3>
                            <input type="image" className="vb-img" width="85%" src={vbStorage}/>
                            <br/>
                            One last thing. Remember that ISO file we downloaded? That was our guest OS and we need to link that to the virtual machine. 
                            This can be done by clicking on the option under <strong>Storage Devices</strong> - 
                            <br/>
                            <br/>
                            <figure class="quote" style={{width:"26%"}}>
                                <blockquote>
                                &#8220; O Empty &#8221;
                                </blockquote>
                            </figure>
                            <br/>
                            Then under then under the attributes section click the disk like image. A dropdown should appear prompting you with three possible options (if this is your first vm). <br/>
                            <br/>
                            <li>Choose/Create a Virtual Optical Disk...</li>
                            <li>Choose a disk file...</li>
                            <li>Remove disk from Virtual Drive (may be disabled)</li>
                            <br/>
                            We need to add our ubuntu file we downloaded earlier, so it only makes sense to choose a file disk.
                            This will prompt you with the finder where you find the ISO file. Exit out of the settings window by pressing ok to fully apply all your changes. 

                            <br/>
                        </p>
                        <hr/>
                        <p>
                            <h2 className="post-subtitle">Start it up</h2>
                            FINALLY! We can finally click the start button. It's big, green, and looks like an arrow - can't miss it. <br/>
                            Give it some time as this is the first time your Virtual Machine is starting up. There are quite a few things needed to be done in order for your OS
                            to be up and running.

                            Once that is done loading, there will be a couple of things left to do. Like all operating systems, there will be a couple of settings to be changed. Such as the language, keyboard layout etc.
                            They are all quite user friendly and have many tutorials explaining how to get your OS setup. 
                        </p>
                        <hr/>
                        <p>
                            <h2 className="post-subtitle">Window resizing</h2>
                            One last thing before your all done. Try resizing your window. You may see that the screens size does not adjust to Virtual Box's window.
                            In order to fix this, if you have the Ubuntu OS installed you can click "Activities" at the top left. In the search bar type "Terminal" and click enter.
                            <br/>
                            In your terminal enter the following commands
                            <br/>
                            <br/>
                            <CodeBlock
                                codeString={"ubuntu@ubuntu:~$ sudo apt install build-essential dkms"}
                                language={"bash"}
                            />
                            <br/>
                            <CodeBlock
                                codeString={"ubuntu@ubuntu:~$ sudo apt-get install virtualbox-guest-additions-iso"}
                                language={"bash"}
                            />
                            <br/>
                            After running these two commands, you can restart your VM by clicking (x) button on your virtual box window.
                            A popup should appear asking how you'd like to exit. Hit "power of machine" and "ok". Then start your VM back up again.
                        </p>
                        <hr/>
                        <p>
                            <h2 className="post-subtitle"> All Done!</h2>
                            If you have made it all the way down here, I hope you found use in my descriptive post on not only how to set up a virtual machine, but what it is and why you need it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
