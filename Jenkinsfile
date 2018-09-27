node {
    /* Requires the Docker Pipeline plugin to be installed */
    currentBuild.result = 'SUCCESS'
    stage("checkout") {
        checkout scm
    }
    stage("test") {
        docker.image('node:carbon').inside {
            sh 'wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \\' +
                    '  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \\' +
                    '  apt-get update && \\' +
                    '  apt-get install -y google-chrome-stable xvfb \\' +
                    '  apt-get install -y procps'
            sh 'npm --prefix frontend prune'
            sh 'npm --prefix frontend install'
            sh 'npm --prefix frontend test-headless'
        }
    }
    docker.withRegistry('http://95.169.186.20:8082/repository/compmanager-registry/', 'Nexus') {
        env.BUILD_ID = "test"
        env.IMAGE_NAME = "frontend"
        def customImage = null
        stage("build_docker") {
            try {
                customImage = docker.build("${env.IMAGE_NAME}:${env.BUILD_ID}")
            } catch (err) {
                currentBuild.result = 'FAILURE'
                print "Failed: ${err}"
                throw err
            }
        }
        if (env.BRANCH_NAME == 'master' && currentBuild.result == 'SUCCESS') {
            stage("push_image") {
                customImage.push()
            }
        }
    }
}
