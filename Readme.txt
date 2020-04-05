…or create a new repository on the command line
echo "# CursoNode" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/Thimisul/CursoMongoNode.git
git push -u origin master
                


…or push an existing repository from the command line
git remote add origin https://github.com/Thimisul/CursoMongoNode.git
git push -u origin master


na virtual box problema com symlink 

VBoxManage.exe setextradata VM_NAME VBoxInternal2/SharedFoldersEnableSymlinksCreate/SHARE_NAME 1

executar o virtual box como administrador