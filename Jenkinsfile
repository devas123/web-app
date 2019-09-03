node {
    /* Requires the Docker Pipeline plugin to be installed */
    currentBuild.result = 'SUCCESS'
    stage("checkout") {
        checkout scm
    }
    stage("test") {
        docker.build("web-app:test", "-f Dockerfile.test .").inside {
		    sh 'npm config set registry http://95.169.186.20:4873/'
            sh 'npm --prefix frontend prune'
            sh 'npm --prefix frontend install'
            sh 'npm --prefix frontend run test-headless'
        }
    }
    docker.withRegistry('http://95.169.186.20:8082/repository/compmanager-registry/', 'Nexus') {
        env.BUILD_ID = "test"
        env.IMAGE_NAME = "frontend"
        def customImage = null
        if (env.BRANCH_NAME == 'master' && currentBuild.result == 'SUCCESS') {
            stage("build_docker") {
                try {
                    customImage = docker.build("${env.IMAGE_NAME}:${env.BUILD_ID}")
                } catch (err) {
                    currentBuild.result = 'FAILURE'
                    print "Failed: ${err}"
                    throw err
                }
            }
            stage("push_image") {
                if (customImage != null && currentBuild.result != 'FAILURE') {
                    customImage.push()
                }
            }
        }
    }
}
